# app-icct
Trata-se de uma aplicação de biblioteca, com as seguintes operações de um CRUD:

  - Visualizar uma lista livros existentes.
  - Consultar um livro específico.
  - Cadastrar um livro.
  - Deletar um livro.
  - Editar um livro.

Passos para rodar o sistema:
Passo 1:
  - Rodar as dependencias do Nodejs: npm install

Passo 2:
  - Fazer uma cópia do arquivo '.env.example' e edita-lo, deixando dessa forma: .env

Passo 3:
  - Rodar as imagens do NodeJS e PostgreSQL com o comando: docker-compose up -d

Passo 4:
  - Para verificar se o os containers estão 'de pé', vá até seu navegador e digite o endereço do servidor: https://localhost:8000
  - Terá que aparecer uma página html com o nome da API e um link para verificar a lista de livro que está sendo consumida.
  - Clique em 'Livros - JSON'

Passo 5:
  - Caso a tabela não tenha sido criada pelo Dockefile, execute o outro passo.
  - Para criar a tabela de usuários, rode o script.sql no terminal:
    docker exec -i db-postgres psql -U postgres -d postgres < /home/raimundo-marques/Projects/app-icct/backend/script.sql

    Obs.: Verificar o caminho do diretório para rodar o script. No lugar de '/home/raimundo-marques/Projects', coloque o caminho na sua máquina.

Obeserção: Caso seja preciso rodar o docker-compose novamente, será necessário excluir o diretório 'data/', com privilégios root, para rodar o banco de dados Postgres.