# Tweteroo

Tweteroo é um projeto de clone do Twitter, desenvolvido com o objetivo de aprender e praticar tecnologias web modernas.

## Funcionalidades

- Cadastro de usuários
- Login e autenticação de usuários
- Compartilhamento de mensagens (tweets)
- Feed de notícias
- Seguir e deixar de seguir outros usuários
- Perfil de usuário

## Tecnologias Utilizadas

- React
- Node.js
- Express
- MongoDB
- JWT (JSON Web Token)

## Como executar o projeto

1. Clone este repositório em sua máquina local.
2. Navegue até a pasta do projeto.
3. Execute o comando `npm install` para instalar as dependências do projeto.
4. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:
   - `PORT`: porta em que o servidor deve ser executado
   - `MONGODB_URI`: URL de conexão com o MongoDB
   - `JWT_SECRET`: chave secreta para a geração dos tokens JWT
5. Execute o comando `npm start` para iniciar o servidor.
6. Navegue até a pasta `client` e execute o comando `npm install` para instalar as dependências do frontend.
7. Execute o comando `npm start` para iniciar o frontend.
8. Acesse o endereço `http://localhost:3000` em seu navegador para utilizar o Tweteroo.

## Licença

Este projeto é distribuído sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.
