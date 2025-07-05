# Guia de Deploy - Marinho Creative Hub Landing Page

## 🚀 Opções de Deploy

### Opção 1: Vercel (Recomendado - Mais Simples)

#### Passos:

1. **Criar conta no Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub

2. **Importar o projeto:**
   - Clique em "New Project"
   - Importe o repositório do GitHub
   - O Vercel detectará automaticamente a configuração

3. **Configurar domínio customizado:**
   - No dashboard do Vercel, vá em "Settings" > "Domains"
   - Adicione seu domínio do name.com
   - Configure os nameservers no name.com para apontar para o Vercel

4. **Configurar GitHub Secrets (para deploy automático):**
   - Vá em Settings > Secrets and variables > Actions
   - Adicione os seguintes secrets:
     - `VERCEL_TOKEN` (gerado no Vercel)
     - `VERCEL_ORG_ID` (ID da sua organização)
     - `VERCEL_PROJECT_ID` (ID do projeto)

5. **Configurar nameservers no name.com:**
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ns3.vercel-dns.com
   ns4.vercel-dns.com
   ```

### Opção 2: VPS (Mais Controle)

#### Requisitos:
- VPS com Ubuntu/Debian
- Nginx instalado
- Node.js 18+
- PM2 para gerenciamento de processos

#### Configuração do VPS:

1. **Instalar dependências:**
   ```bash
   sudo apt update
   sudo apt install nginx nodejs npm
   sudo npm install -g pm2
   ```

2. **Configurar Nginx:**
   ```bash
   sudo nano /etc/nginx/sites-available/marinho-creative-hub
   ```

   Conteúdo:
   ```nginx
   server {
       listen 80;
       server_name seu-dominio.com www.seu-dominio.com;
       
       root /var/www/marinho-creative-hub/dist/spa;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
       
       location /api {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

3. **Ativar o site:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/marinho-creative-hub /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

4. **Configurar SSL com Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d seu-dominio.com -d www.seu-dominio.com
   ```

5. **Configurar GitHub Secrets:**
   - `VPS_HOST`: IP do seu VPS
   - `VPS_USERNAME`: usuário do VPS
   - `VPS_SSH_KEY`: chave SSH privada

### Opção 3: Netlify (Alternativa)

O projeto já está configurado para Netlify. Para usar:

1. **Conectar ao Netlify:**
   - Acesse [netlify.com](https://netlify.com)
   - Importe o repositório

2. **Configurar domínio:**
   - Vá em "Domain settings"
   - Adicione seu domínio customizado
   - Configure os nameservers no name.com

## 🔧 Configuração do Domínio no name.com

1. **Acesse o painel do name.com**
2. **Vá em "DNS Management"**
3. **Configure os nameservers:**

   **Para Vercel:**
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ns3.vercel-dns.com
   ns4.vercel-dns.com
   ```

   **Para Netlify:**
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```

   **Para VPS:**
   - Configure registros A apontando para o IP do seu VPS
   - Configure registros CNAME para www

## 🚀 Deploy Automático

O GitHub Actions está configurado para:
- Executar em pushes para a branch `main`
- Fazer build da aplicação
- Executar type checking
- Fazer deploy automático

## 📝 Variáveis de Ambiente

Se necessário, configure as seguintes variáveis no seu provedor de deploy:

```env
NODE_ENV=production
```

## 🔍 Monitoramento

- **Vercel:** Dashboard integrado com analytics
- **VPS:** Configure PM2 para monitoramento
- **Netlify:** Analytics e logs integrados

## 🛠️ Troubleshooting

### Problemas comuns:

1. **Build falha:**
   - Verifique se todas as dependências estão instaladas
   - Execute `npm run typecheck` localmente

2. **Domínio não carrega:**
   - Aguarde propagação do DNS (até 48h)
   - Verifique configuração dos nameservers

3. **API não funciona:**
   - Verifique se as rotas estão configuradas corretamente
   - Teste localmente com `npm run dev`

## 📞 Suporte

Para dúvidas sobre deploy, consulte:
- [Documentação do Vercel](https://vercel.com/docs)
- [Documentação do Netlify](https://docs.netlify.com)
- [GitHub Actions](https://docs.github.com/en/actions) 