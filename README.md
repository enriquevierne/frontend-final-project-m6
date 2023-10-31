# Documentação da API

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Início Rápido Frontend](#2-início-rápido-frontend)
    - [Instalando Dependências](#21-instalando-dependências)
    - [Rodando o frontend](#22-rodando-o-frontend)
- [Início Rápido Backend](#3-início-rápido-backend)
    - [Instalando Dependências](#31-instalando-dependências)
    - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
    - [Migrations](#33-migrations)
    - [Rodando o servidor](#34-rodando-o-servidor)



---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [ReactJS](https://react.dev/)
- [React-Hook-Form](https://react-hook-form.com/)
- [React-Router-Dom](https://reactrouter.com/en/main)
- [React-Toastify](https://www.npmjs.com/package/react-toastify)
- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://www.npmjs.com/package/zod)
- [TailwindCSS](https://tailwindcss.com/)

A URL do repositório frontend:
https://github.com/enriquevierne/frontend-final-project-m6

A URL do repositório backend:
https://github.com/enriquevierne/fullstack-final-project-m6

A URL base da aplicação:
http://localhost:5173/

---

## 2. Início Rápido Frontend
[ Voltar para o topo ](#tabela-de-conteúdos)


### 2.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
npm install
```
### 2.2. Rodando o Frontend

Após a intalação das dependências, rode o comando:
```shell
npm run dev
```
resposta esperada:
````shell

  VITE v4.5.0  ready in 711 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
````

## 3. Início Rápido Backend
[ Voltar para o topo ](#tabela-de-conteúdos)


### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
npm install
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```shell
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```shell
npm run typeorm migration:generate ./src/migrations/InitialMigration -- -d ./src/data-source.ts
```
e depois este comando:

```shell
npm run typeorm migration:run -- -d ./src/data-source
```

### 3.4. Rodando o servidor
Execute as migrations com o comando:

```shell
npm run dev
```
resposta esperada:
````shell
query: SELECT * FROM current_schema()
query: SELECT version();
Server is running  
Servidor executando
````