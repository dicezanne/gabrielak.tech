# Instruções para Implantação do Site gabrielak.tech

Este documento contém instruções para implantar o site gabrielak.tech em um servidor web.

## Conteúdo do Arquivo

O arquivo `gabrielak-site-source.zip` contém o código-fonte completo do site, incluindo:

- Diretório `src/`: Contém todos os componentes, páginas e estilos do site
- Diretório `public/`: Para arquivos estáticos como imagens
- Arquivos de configuração: `package.json` e `tailwind.config.ts`

## Requisitos

- Node.js 18.0.0 ou superior
- npm ou yarn

## Passos para Implantação

### 1. Preparação do Ambiente

1. Descompacte o arquivo `gabrielak-site-source.zip` em um diretório de sua escolha
2. Abra um terminal e navegue até o diretório onde os arquivos foram extraídos
3. Execute o comando para instalar as dependências:

```bash
npm install
# ou
yarn install
```

### 2. Desenvolvimento Local

Para testar o site localmente antes da implantação:

```bash
npm run dev
# ou
yarn dev
```

O site estará disponível em `http://localhost:3000`

### 3. Construção para Produção

Para construir o site para produção:

```bash
npm run build
# ou
yarn build
```

### 4. Opções de Implantação

#### Opção 1: Vercel (Recomendado)

A Vercel é a plataforma ideal para projetos Next.js:

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Instale a CLI da Vercel:
   ```bash
   npm install -g vercel
   # ou
   yarn global add vercel
   ```
3. Faça login e implante:
   ```bash
   vercel login
   vercel
   ```
4. Siga as instruções para conectar seu domínio `gabrielak.tech`

#### Opção 2: Netlify

1. Crie uma conta em [netlify.com](https://netlify.com)
2. Faça upload da pasta `out` gerada após executar:
   ```bash
   npm run build
   npm run export
   # ou
   yarn build
   yarn export
   ```
3. Configure seu domínio nas configurações do Netlify

#### Opção 3: Hospedagem Tradicional

1. Execute o build do projeto:
   ```bash
   npm run build
   # ou
   yarn build
   ```
2. Faça upload do conteúdo da pasta `.next` para seu servidor
3. Configure seu servidor web (Apache/Nginx) para servir os arquivos estáticos

## Personalização

Para personalizar o site:

- Imagens: Adicione suas imagens ao diretório `public/images/`
- Conteúdo: Edite os arquivos em `src/app/` para modificar o conteúdo das páginas
- Estilos: Ajuste as cores no arquivo `tailwind.config.ts`

## Suporte

Para qualquer dúvida ou problema durante a implantação, entre em contato.
