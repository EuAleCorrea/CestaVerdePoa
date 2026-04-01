# 🤖 Guia de Contribuição — Cesta Verde POA

> **Este arquivo é obrigatório para TODAS as LLMs e agentes de IA que trabalham neste projeto.**
> Leia-o ANTES de fazer qualquer commit, push ou deploy.

---

## 🔀 Controle de Branch

| Informação          | Valor                                                    |
|---------------------|----------------------------------------------------------|
| **Branch Atual**    | `main`                                                   |
| **Remote Name**     | `CestaVerdePoa`                                          |
| **Remote URL**      | `https://github.com/EuAleCorrea/CestaVerdePoa.git`      |
| **Última Atualização** | 2026-04-01                                            |

### ⚠️ Regras Críticas

1. **SEMPRE** verifique a branch atual antes de commitar:
   ```bash
   git branch --show-current
   ```

2. **NUNCA** faça push para uma branch diferente da listada acima sem autorização explícita do usuário.

3. **Ao criar nova branch**, atualize ESTE arquivo com o novo nome da branch antes de qualquer outro trabalho.

4. **Fluxo de commit padrão:**
   ```bash
   git add -A
   git commit -m "tipo: descrição concisa"
   git push CestaVerdePoa main
   ```

5. **Tipos de commit válidos:** `feat`, `fix`, `docs`, `style`, `refactor`, `chore`

---

## 📁 Estrutura do Projeto

```
cestaverdepoa/
├── index.html              # Página principal (site estático)
├── style.css               # Estilos globais (CSS puro, design tokens em :root)
├── script.js               # JavaScript (interatividade, FAQ, WhatsApp, carrinho)
├── docs/
│   └── PRD.md              # Product Requirements Document
├── assets/
│   └── images/             # Imagens do site (produtos, banners, logos)
├── scripts/
│   └── pre-deploy-check.ps1 # Validações antes do deploy
├── .agent/                 # Kit Antigravity (skills, workflows)
├── CONTRIBUTING.md         # ← ESTE ARQUIVO (Git, branch, regras para LLMs)
├── nixpacks.toml           # Config de build (Nixpacks/EasyPanel)
├── package.json            # Dependências Node.js
└── next.config.ts          # Config Next.js (output: standalone)
```

---

## 🖥️ Servidor de Desenvolvimento

```bash
# Iniciar servidor local (site estático, porta 8000)
npx serve . -l 8000
```

> **Nota:** O projeto possui DUAS camadas:
> - **Site estático** (`index.html` + `style.css` + `script.js`) — servido via `npx serve`
> - **App Next.js** (pasta `app/`, `components/`) — servido via `npm run dev`
> 
> Atualmente o desenvolvimento é feito no **site estático**.

---

## 🔧 Convenções Importantes

- **Idioma do código:** Variáveis e comentários técnicos em inglês
- **Idioma das mensagens de commit:** Português do Brasil
- **Idioma da comunicação com o usuário:** Português do Brasil
- **CSS:** Variáveis em `:root`, classes semânticas, SEM TailwindCSS no site estático
- **Telefone WhatsApp:** `5551989707036` (51 98970-7036)
- **Deploy:** EasyPanel + Nixpacks na VPS Hostinger

---

## 📋 Checklist Antes de Cada Push

- [ ] `git branch --show-current` retorna a branch correta (`main`)
- [ ] Branch deste arquivo (`CONTRIBUTING.md`) está atualizada
- [ ] Sem markers de conflito (`<<<<<<<`, `=======`, `>>>>>>>`) nos arquivos
- [ ] Servidor local testado (`npx serve . -l 8000`)
- [ ] Funcionalidades visuais verificadas no navegador
