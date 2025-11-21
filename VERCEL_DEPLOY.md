# Deploy no Vercel - Marinho Creative Hub

## 🚀 Configuração Atualizada

Este projeto foi configurado para funcionar perfeitamente no Vercel. As principais mudanças incluem:

### ✅ Problemas Corrigidos:

1. **Configuração do `vercel.json`** - Simplificada para funcionar com SPA
2. **API Routes** - Criado arquivo `/api/index.ts` para lidar com rotas da API
3. **Build Script** - Otimizado para apenas build do cliente
4. **Workflow GitHub Actions** - Removido conflitos entre workflows

### 📁 Estrutura do Projeto:

```
├── client/           # Frontend React
├── api/             # API Routes para Vercel
├── dist/spa/        # Build do frontend
├── vercel.json      # Configuração do Vercel
└── .vercelignore    # Arquivos ignorados no deploy
```

### 🔧 Como Fazer Deploy:

#### Opção 1: Via GitHub Actions (Automático)
1. Configure os secrets no GitHub:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID` 
   - `VERCEL_PROJECT_ID`

2. Faça push para a branch `main`

#### Opção 2: Via Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

#### Opção 3: Via Dashboard do Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Importe o repositório do GitHub
3. O Vercel detectará automaticamente a configuração

### 🌐 URLs da API:

- `/api/ping` - Teste de conectividade
- `/api/demo` - Endpoint de demonstração

### 🛠️ Troubleshooting:

**Erro: "missing server host"**
- ✅ Corrigido: Removido configuração conflitante do server

**Erro: Build falha**
- ✅ Corrigido: Simplificado script de build

**Erro: API não funciona**
- ✅ Corrigido: Criado arquivo `/api/index.ts`

### 📞 Suporte:

Para problemas específicos do Vercel:
- [Documentação do Vercel](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions) 