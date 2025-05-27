# 🛍️ Página de Produto - E-commerce Montink

Este projeto é um teste técnico que consiste na criação de uma página de produto para um e-commerce, desenvolvida utilizando **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, e integração com a **API do ViaCEP** para consulta de endereço via CEP.

---

## 🚀 Tecnologias utilizadas

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [react-input-mask](https://github.com/sanniassin/react-input-mask) (para formatação do campo de CEP)

---

## 📸 Funcionalidades Implementadas

✅ Página de produto com as seguintes seções:

- **Imagem principal do produto**
- **Miniaturas** abaixo da imagem principal (altera a imagem principal ao clicar)
- **Título, descrição e preço**
- **Seletores dinâmicos de tamanho e cor** (baseados nos dados do produto)
- **Campo de CEP formatado e validado**
  - Verifica se o CEP existe via **API ViaCEP**
  - Mostra o endereço completo se o CEP for válido
- **Persistência dos dados no localStorage** por 15 minutos (mesmo após atualizar a página)

---

## 💾 Como rodar localmente

### Pré-requisitos:
- Node.js v18+
- NPM ou Yarn

### Instalação:

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repositorio.git

# Acesse a pasta
cd nome-do-repositorio

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
