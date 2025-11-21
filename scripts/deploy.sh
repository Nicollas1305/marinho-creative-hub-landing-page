#!/bin/bash

# Script de Deploy Local - Marinho Creative Hub
# Uso: ./scripts/deploy.sh [vercel|netlify|local]

set -e

echo "🚀 Iniciando deploy da Marinho Creative Hub Landing Page..."

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Instale o Node.js 18+ primeiro."
    exit 1
fi

# Verificar se o npm está instalado
if ! command -v npm &> /dev/null; then
    echo "❌ npm não encontrado. Instale o npm primeiro."
    exit 1
fi

# Instalar dependências
echo "📦 Instalando dependências..."
npm ci

# Executar type check
echo "🔍 Executando type check..."
npm run typecheck

# Build da aplicação
echo "🏗️ Fazendo build da aplicação..."
npm run build

echo "✅ Build concluído com sucesso!"

# Deploy baseado no argumento
case "${1:-local}" in
    "vercel")
        echo "🚀 Fazendo deploy para Vercel..."
        if command -v vercel &> /dev/null; then
            vercel --prod
        else
            echo "❌ Vercel CLI não encontrado. Instale com: npm i -g vercel"
            exit 1
        fi
        ;;
    "netlify")
        echo "🚀 Fazendo deploy para Netlify..."
        if command -v netlify &> /dev/null; then
            netlify deploy --prod --dir=dist/spa
        else
            echo "❌ Netlify CLI não encontrado. Instale com: npm i -g netlify-cli"
            exit 1
        fi
        ;;
    "local")
        echo "🚀 Iniciando servidor local..."
        echo "📁 Arquivos de build em: dist/"
        echo "🌐 Acesse: http://localhost:3000"
        npm run start
        ;;
    *)
        echo "❌ Opção inválida. Use: vercel, netlify ou local"
        exit 1
        ;;
esac

echo "�� Deploy concluído!" 