# Client Contacts 🗒️

Client Contacts permite que o usuário crie uma conta e a partir daí consulte, edite e delete sua própria conta. O usuário também pode cadastrar, editar, consultar e deletar contatos conforme atualiza sua lista de contatos. Além disso a aplicação permite uma visão geral de todos os contatos.

## Como executar o projeto

### Setup de ambiente:

-   [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)
-   [Node LTS](https://nodejs.org/en/)

### Como rodar na minha máquina?

-   Clone o projeto `https://github.com/felipebravo/clients-contacts-frontend.git`;
-   Execute o comando `yarn install` no diretório do projeto para instalar todas as dependências necessárias;
-   Execute o comando `yarn start dev` no diretório do projeto para rodar a aplicação em modo de desenvolvedor;
-   Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador;
-   Pronto 🎉

**Como realizar contribuições para o projeto?**

-   Execute o comando `git checkout -b <nome-da-nova-branch> master` no diretório do projeto para criar uma nova branch;
-   Realize um commit convencional das alterações realizadas `git commit -m "feat: <descrição-do-commit>`
-   Execute o comando `git push origin <sua-branch>` para enviar as contribuições.
-   Pronto 🎉

### `yarn start dev`

Executa a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.\
A página será recarregada se você fizer edições.\
Você também poderá visualizar erros de lint no console.

## Como o projeto está estruturado

```
clients-contacts-front
├── 📁 node_modules ➡️ Dependências instaladas pelo yarn.
├── 📁 public ➡️ Arquivos estáticos públicos.
├── 📂 src ➡️ Código fonte do projeto.
│   ├── 📁 assets ➡️ Arquivos estáticos como imagens, fontes e etc.
│   ├── 📁 components ➡️ Componentes React reutilizáveis.
│   ├── 📁 contexts ➡️ Contextos React para compartilhamento de dados.
│   ├── 📁 pages ➡️ Páginas principais da aplicação.
│   ├── 📁 routes ➡️ Definições de rotas da aplicação.
│   ├── 📁 schemas ➡️ Serializações dos formulários.
│   ├── 📁 services ➡️ Configuração das APIs externas.
│   ├── 📁 styles ➡️ Arquivos de estilização do projeto.
│   ├── App.tsx ➡️ Componente principal.
│   ├── index.tsx ➡️ Inicia o aplicativo e o renderiza na página HTML.
│   └── react-app-env.d.ts ➡️ Permite ao TypeScript reconhecer variáveis globais.
├── .gitignore ➡️ Arquivo que devem ser ignorados pelo Git.
├── package.json ➡️ Informações do projeto e as dependências utilizadas.
├── README.md ➡️ Documentação do projeto.
├── tsconfig.json ➡️ Configuração do TypeScript.
├── yarn-error.log ➡️ Gerado pelo yarn.
└── yarn.lock ➡️ Gerado pelo yarn.
```

## Funcionalidades

1. Cadastro de Usuário\
   É necessário que o usuário cadastre-se na aplicação com as informações da página de cadastro para que o mesmo possa acessar as demais funcionalidades.

2. Edição e Exclusão de Perfil\
   Após se cadastrar e realizar o login o usuário pode editar ou excluir sua própria conta, caso queira.

3. Criação de Contatos\
   O usuário pode criar um novo contato, fornecendo as informações necessárias, como nome completo, e-mail e contato.

4. Edição e Exclusão de Anúncios\
   O usuário pode editar ou excluir seus próprios contatos.

## Tecnologias 💻

-   **React**
    -   React Router DOM
    -   React Hook Form
    -   React Icons
-   **TypeScript**
-   **Axios**
-   **CORS**
-   **JSON Web Token (JWT)**
    -   Decode
-   **Yup**
-   **Styled Components**

## Créditos 👨‍💻

-   Felipe Bravo [:octocat:](https://github.com/felipebravo)

## Fullstack

Essa aplicação faz parte de um projeto fullstack, para mais informações sobre a API Client Contacts acesse [clients-contacts-api](https://github.com/felipebravo/clients-contacts-api.git).

### Como executar a aplicação consumindo da API

-   Execute todos os passos de "Como rodar na minha máquina?" da [API](https://github.com/felipebravo/clients-contacts-api.git);
-   Certifique-se de que a [API](https://github.com/felipebravo/clients-contacts-api.git) esteja sendo executada na porta 3000;
-   Com o servidor sendo executado, rode o comando `yarn start dev` no diretório clonado da Client Contacts Fronted;
-   Com a [API](https://github.com/felipebravo/clients-contacts-api.git) sendo executada e a aplicação Frontend sendo executada na rota `http://localhost:3001/` a aplicação estará 100% funcional.
-   Aproveite 🎉

## Saiba mais

Você pode conhecer mais em [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, veja [React documentation](https://reactjs.org/).
