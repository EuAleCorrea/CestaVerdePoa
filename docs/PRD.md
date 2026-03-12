# Product Requirements Document (PRD)

## 1. Visão Geral do Produto
O **Cesta Verde POA** é uma plataforma de e-commerce e catálogo digital voltada para a venda de produtos orgânicos e naturais (hortifruti, secos, especiarias e suplementos). O objetivo principal é conectar consumidores finais que buscam um estilo de vida saudável a fornecedores de alimentos livres de agrotóxicos, oferecendo uma experiência de compra ágil e transparente focada na qualidade "Da Terra".

Atualmente, o projeto está validado como uma vitrine estática (Frontend) e servirá como base estrutural e visual para as futuras etapas de implementação de regras de negócios, e-commerce dinâmico e gestão de banco de dados.

## 2. Casos de Uso (Use Cases)
- **Descoberta de Produtos (Catálogo):** O cliente navega por seções ("Destaques", "Mais Vendidos", "Novidades") visuais para explorar produtos disponíveis.
- **Entendimento da Proposta de Valor:** O cliente lê sobre diferenciais da loja, frete grátis, descontos (Pix), recebendo garantia de compra segura e atendimento via WhatsApp.
- **Intenção de Compra (Simulação de Carrinho):** O cliente clica em "Adicionar" nos produtos e recebe feedback visual imediato contendo a quantidade de itens salvos localmente num indicador iconográfico de sacola/carrinho.
- **Contato/Conversão Direta:** O cliente redireciona o fluxo de compra/dúvidas diretamente para o WhatsApp do atendimento via "Floating Action Button".
- **Assinatura de Newsletter:** O cliente deixa o contato de e-mail e nome para ofertas e novidades.

## 3. Requisitos Funcionais (RF)
| ID | Descrição |
|:---|:---|
| RF01 | Rotação automática e manual do banner (Hero Slider) na tela inicial evidenciando campanhas promocionais. |
| RF02 | Listar de produtos divididos por categorias promocionais (Mais Vendidos, Novidades) em grid responsivo. |
| RF03 | Feedback visual e contador persistente (em sessão do estado dinâmico da página) ao adicionar um produto ao carrinho. |
| RF04 | Funcionalidade para ocultar ou expandir o menu em dispositivos móveis (Mobile Hamburger Menu) sem interrupção de scroll no eixo X. |
| RF05 | Coletar dados de Nome e E-mail através e simular envio na seção Newsletter, entregando feedback em tela: botão "Enviando" -> "Cadastrado!". |
| RF06 | Navegação "sticky" (Top Navigation presa ao topo) e acionamento de sombreamento de navegação ao ocorrer o Scroll de página profundo. |

## 4. Requisitos Não Funcionais (RNF)
| ID | Descrição |
|:---|:---|
| RNF01 | **Desempenho:** Arquitetura *Static Site* pura de máxima performance baseada em arquivos HTML, CSS e JS enxutos (sem depender de Virtual DOM no momento). |
| RNF02 | **Responsividade:** Utilizar *Media Queries* ou equivalentes que assegurem o design fluído em telas de 320px até Ultra Wide. "Mobile First" mentalidade. |
| RNF03 | **Usabilidade:** Aplicação da estética chamada localmente de "Safe Harbor" baseada em cantos arredondados, fontes sem serifa modernas (Montserrat), alta clareza de grid de cartões.  |
| RNF04 | **Manutenibilidade:** O CSS deve estar enraizado num uso massivo de variáveis (`:root`) como `ver-escuro`, `verde-vibrante`, `transições` e `espaçamentos`, facilitando um pseudo design system local. |
| RNF05 | **Animações (UX):** Entradas sutis no scroll (*fade in* + transladeY) usando cálculos para apresentar conteúdo (atualmente manual via scroll listener - candidato a refatoração baseada em `IntersectionObserver`). |

## 5. Arquitetura e Estrutura de Arquivos
O projeto segue uma arquitetura tradicional de arquivos não-transpilados na raiz de pasta pública.

```text
/
├── assets/                    # Assets base do front 
│   └── images/                # Fotos, Banners, Logos de produtos/features
├── docs/                      # Documentações adicionais ao negócio (incluindo este PRD)
├── .agent/                    # (Kit Antigravity) Scripts operacionais de DevOps, Testes e Segurança
├── index.html                 # Ponto de Entrada / Homepage Estrutural
├── style.css                  # Folhas de estio customizadas (A base de Design Tokens CSS)
├── script.js                  # Engine de Interatividades e Manipulação do DOM
└── (Versões Alternativas .html, .css etc formadas localmente como referencial/provas)
```

## 6. Próximos Passos (Evolução Roadmap Sugerida)
Considerando a base V1 ("Safe Harbor") já validada pelo cliente:

1. **Dinamicidade Integrada (Backend Foundation):** Elevar esta estrutura de estática (HTML Puro) para um Framework JavaScript (como **Next.js**), mantendo estritamente a identidade visual já aprovada, visando injeções de dados dinâmicas (Supabase).
2. **Integração Real de Carrinho:** O contador simulado atual passará a armazenar e calcular sessões de carrinho, frete e finalização por API de Pagamentos (Stripe).
3. **Catálogo Integrado/Filtros:** Expandir as rotas com SSR/SSG (Categorias, Pesquisa detalhada de produtos).
4. **Refatoração Interna Estilística:** Mudar a organização estilística atual `style.css` baseada em CSS global para classes utilitárias via **Tailwind CSS**, permitindo componentização eficiente e sem perdas ao escopo já validado.

---
*Status: Aguardando revisão inicial do Cliente (V1)*
