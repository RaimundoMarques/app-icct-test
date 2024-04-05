# app-icct
Trata-se de uma aplicação de biblioteca, com as seguintes operações:
  - Visualizar uma lista livros existentes.
  - Consultar um livro específico.
  - Cadastrar um livro.
  - Deletar um livro.
  - Editar um livro.

O código possui 2 pastas:
  - backend
  - frontend
Sendo o Backend desenvolvido com Nodejs e Frontend com VUE JS.

O frontend foi desenvolvido a partir de um container Docker que virtualiza 2 containers
Um contendo a imagem do Servidor Nodejs 16 e outra, uma imagem do Banco de Dados PostgreSQL.

Passos para rodar o sistema:
Passo 1:
  - Rodar as dependencias do Nodejs: npm install

Passo 2:
  - Vamos agora rodar os nossos container Docker com: docker-compose up -d

Passo 3:
  - Para criar a tabela de usuários, rode o script.sql no terminal:
    docker exec -i db-postgres psql -U postgres -d postgres < /home/raimundo-marques/Projects/app-icct/backend/script.sql

Obeserção: Caso seja preciso rodar o docker-compose novamente, será necessário excluir o diretório 'data/', com privilégios root, para rodar o banco de dados Postgres.