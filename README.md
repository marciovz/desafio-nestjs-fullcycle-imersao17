# Desafio NestJs - Fullcycle Imersão 17

O desafio consite em criar uma aplicação backend com NestJs, com dois endpoints para crição e listagem de Assets e Orders.

## Requisitos do desafio
- NestJs
- TypeOrm
- Banco SQLite
- Relacionamento entre as tabelas Asset e Order
- Permitir a crição de um Asset ao criar uma Order se ela não existir
- Uso do eager loading para garantir listagens do asset na listagem da order
- Arquivos de requisição HTTP

## Requisitos para rodar a aplicação

- NodeJs (>=18)
- NestJs

## Rodando a aplicação

```sh
# Instalação das dependências do projeto
npm install

# Rodando a aplicação
npm run start:dev

```

## Testando a api

```
O arquivo api.http para testar as requisições está na raiz do projeto.

```
