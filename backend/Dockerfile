# Use a imagem oficial do Node.js 16 como base
FROM node:16

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json (se existirem) para o diretório de trabalho
COPY package*.json ./

# Copia o arquivo .sql para dentro do contêiner
COPY script.sql /docker-entrypoint-initdb.d/

# Instale as dependências do projeto
RUN npm install

# Instale o nodemon globalmente
RUN npm install -g nodemon

# Este comando garante que o script SQL seja executado ao iniciar o contêiner
RUN echo "USE postgres;" > /docker-entrypoint-initdb.d/script.sql

# Copie o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Comando para iniciar a aplicação com nodemon
CMD ["npm", "run", "dev"]