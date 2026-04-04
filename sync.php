<?php
/**
 * sync.php — Sincronização do Instagram via Apify
 * 
 * Lê o dataset do Apify, baixa as 5 imagens mais recentes
 * e gera posts.json para o frontend consumir.
 * 
 * Uso: Cron Job na Hostinger (1x por dia)
 * Comando: /usr/bin/php /home/u841756706/public_html/sync.php
 */

// Carregar configurações sensíveis
$config = require __DIR__ . '/config.php';
$APIFY_TOKEN = $config['apify_token'];
$SECURITY_TOKEN = $config['security_token'];
$TASK_ID = 'alecorrea~instagram-scraper-task';

// Verificar token (exceto quando rodado via CLI/cron)
if (php_sapi_name() !== 'cli') {
    $token = isset($_GET['token']) ? $_GET['token'] : '';
    if ($token !== $SECURITY_TOKEN) {
        http_response_code(403);
        die('Acesso negado.');
    }
}

$IMAGE_DIR = __DIR__ . '/assets/images/instagram';
$POSTS_JSON = __DIR__ . '/posts.json';
$LOG_FILE = __DIR__ . '/sync_log.txt';

// Função de log
function logMsg($msg) {
    global $LOG_FILE;
    $timestamp = date('Y-m-d H:i:s');
    file_put_contents($LOG_FILE, "[{$timestamp}] {$msg}\n", FILE_APPEND);
}

// Criar diretório de imagens se não existir
if (!is_dir($IMAGE_DIR)) {
    mkdir($IMAGE_DIR, 0755, true);
}

logMsg("Iniciando sincronização...");

// Buscar o dataset da última rodada da Task
$runsUrl = "https://api.apify.com/v2/actor-tasks/{$TASK_ID}/runs?token={$APIFY_TOKEN}&limit=1&desc=true";
$runsResponse = @file_get_contents($runsUrl);
$runsData = json_decode($runsResponse, true);

if (!$runsData || empty($runsData['data']['items'])) {
    logMsg("ERRO: Não foi possível obter a última run da Task.");
    die("Erro ao buscar runs");
}

$lastRun = $runsData['data']['items'][0];
$datasetId = $lastRun['defaultDatasetId'];
logMsg("Dataset da última run: {$datasetId} (status: {$lastRun['status']})");

$API_URL = "https://api.apify.com/v2/datasets/{$datasetId}/items?token={$APIFY_TOKEN}&limit=5";

// Buscar dados do Apify
$response = @file_get_contents($API_URL);

if ($response === false) {
    logMsg("ERRO: Falha ao conectar com a API do Apify.");
    die("Erro na API");
}

$posts = json_decode($response, true);

if (!is_array($posts) || count($posts) === 0) {
    logMsg("Nenhum post retornado pela API. Encerrando.");
    die("Sem posts");
}

logMsg(count($posts) . " posts recebidos da API.");

$result = [];

foreach ($posts as $index => $post) {
    $shortCode = isset($post['shortCode']) ? $post['shortCode'] : "post_{$index}";
    $displayUrl = isset($post['displayUrl']) ? $post['displayUrl'] : null;
    $postUrl = isset($post['url']) ? $post['url'] : "https://www.instagram.com/cestaverdepoa/";
    
    if (!$displayUrl) {
        logMsg("Post {$shortCode}: sem displayUrl, pulando.");
        continue;
    }
    
    $filename = $shortCode . '.jpg';
    $localPath = $IMAGE_DIR . '/' . $filename;
    $relativePath = 'assets/images/instagram/' . $filename;
    
    // Baixar imagem se não existir localmente
    if (!file_exists($localPath)) {
        $ch = curl_init($displayUrl);
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_USERAGENT => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        ]);
        $imageData = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $curlError = curl_error($ch);
        curl_close($ch);
        
        if ($imageData !== false && $httpCode === 200 && strlen($imageData) > 1000) {
            file_put_contents($localPath, $imageData);
            logMsg("Imagem baixada: {$filename} (" . round(strlen($imageData)/1024) . " KB)");
        } else {
            logMsg("ERRO ao baixar {$filename}: HTTP {$httpCode} | curl: {$curlError}");
            continue;
        }
    } else {
        logMsg("Imagem já existe: {$filename}");
    }
    
    $result[] = [
        'url' => $postUrl,
        'localImage' => $relativePath,
        'shortCode' => $shortCode
    ];
}

// Salvar posts.json
if (count($result) > 0) {
    file_put_contents($POSTS_JSON, json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
    logMsg("posts.json atualizado com " . count($result) . " posts.");
} else {
    logMsg("Nenhuma imagem salva. posts.json não atualizado.");
}

logMsg("Sincronização concluída.\n");

// Exibir resultado se acessado via browser
if (php_sapi_name() !== 'cli') {
    header('Content-Type: application/json');
    echo json_encode([
        'status' => 'ok',
        'posts_salvos' => count($result),
        'timestamp' => date('Y-m-d H:i:s')
    ]);
}
?>
