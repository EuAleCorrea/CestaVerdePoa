<#
.SYNOPSIS
Script de verificação Pré-Deploy para Cesta Verde POA (Static Site)
.DESCRIPTION
Realiza validações obrigatórias para infraestrutura Nixpacks / EasyPanel.
#>

Write-Host "Iniciando Pre-Deploy Check..." -ForegroundColor Cyan

# 1. Verifica Nixpacks.toml
if (Test-Path "nixpacks.toml") {
    $nixpacks = Get-Content "nixpacks.toml" -Raw
    if ($nixpacks -match 'providers\s*=\s*\["node"\]') {
        Write-Host "✅ [OK] providers = ['node'] encontrado no nixpacks.toml" -ForegroundColor Green
    } else {
        Write-Host "❌ [ERRO] nixpacks.toml deve ter providers = ['node']" -ForegroundColor Red
        exit 1
    }
    if ($nixpacks -match 'NODE_VERSION\s*=\s*"20"') {
        Write-Host "✅ [OK] NODE_VERSION = 20 configurado." -ForegroundColor Green
    } else {
        Write-Host "❌ [ERRO] NODE_VERSION = 20 ausente no nixpacks.toml" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "❌ [ERRO] nixpacks.toml não encontrado!" -ForegroundColor Red
    exit 1
}

# 2. Verifica package.json
if (Test-Path "package.json") {
    $pkg = Get-Content "package.json" -Raw
    if ($pkg -match '"node":\s*">=20.9.0"') {
        Write-Host "✅ [OK] Engines Node configurado no package.json" -ForegroundColor Green
    } else {
        Write-Host "❌ [ERRO] Engines Node >=20.9.0 ausente no package.json" -ForegroundColor Red
        exit 1
    }
    if ($pkg -match '"start":\s*"serve') {
        Write-Host "✅ [OK] Script de Start Estático configurado" -ForegroundColor Green
    } else {
         Write-Host "❌ [ERRO] Script start para rodar Servidor Estático ausente." -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "❌ [ERRO] package.json não encontrado!" -ForegroundColor Red
    exit 1
}

Write-Host "🚀 Tudo verde! Deploy autorizado!" -ForegroundColor Green
exit 0
