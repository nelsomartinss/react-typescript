📝 ToDo List App

Este projeto é uma Single Page Application (SPA) desenvolvida para auxiliar usuários no gerenciamento eficiente de suas tarefas diárias. Construída com tecnologias web modernas, a aplicação oferece uma interface intuitiva para adicionar, completar e deletar tarefas. Ela serve como uma demonstração prática de uma aplicação React completa, exemplificando boas práticas em gerenciamento de estado, roteamento, modularidade de componentes e interação com APIs (incluindo a simulação de API para o desenvolvimento).

*   **Público-alvo:** Usuários que buscam uma ferramenta simples para gerenciamento de tarefas e desenvolvedores interessados em explorar ou revisar tecnologias modernas de frontend, como React, TypeScript e ferramentas de mocking de API.
*   **Objetivo:** Proporcionar uma experiência de usuário fluida para o gerenciamento de tarefas e atuar como um repositório de referência para o desenvolvimento de aplicações web robustas com React, TypeScript, Vite e simulação de API.

O projeto utiliza um conjunto robusto de tecnologias para proporcionar uma experiência de desenvolvimento moderna e eficiente:

*   **Linguagem:** TypeScript
*   **Frameworks & Bibliotecas:**
    *   [React](https://react.dev/): Biblioteca JavaScript para construção de interfaces de usuário.
    *   [Vite](https://vitejs.dev/): Ferramenta de build e servidor de desenvolvimento otimizado para projetos frontend.
    *   [React Router DOM](https://reactrouter.com/): Biblioteca para roteamento declarativo em aplicações React.
    *   [Axios](https://axios-http.com/): Cliente HTTP baseado em Promises para fazer requisições a APIs.
    *   [Mirage JS](https://miragejs.com/): Biblioteca para simulação de APIs REST, permitindo o desenvolvimento frontend independente do backend.
    *   [ESLint](https://eslint.org/): Ferramenta para identificar e reportar padrões problemáticos no código JavaScript/TypeScript.
    *   [CSS Modules](https://github.com/css-modules/css-modules): Para escopo local de estilos CSS, prevenindo conflitos e promovendo modularidade.
    *   [gh-pages](https://github.com/tschaub/gh-pages): Para facilitar o deploy da aplicação em GitHub Pages.

Para configurar e rodar o projeto localmente, siga os passos abaixo:

1.  **Pré-requisitos:** Certifique-se de ter o Node.js (versão LTS recomendada) e o npm (ou yarn) instalados em sua máquina.
2.  **Clonar o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git # Substitua pelo link real do seu repositório
    cd seu-repositorio # Substitua pelo nome da pasta do projeto
    ```
3.  **Instalar dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```
4.  **Rodar a aplicação em modo de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```
    A aplicação estará disponível em `http://localhost:5173/toDoList/` (ou outra porta indicada no seu terminal). O servidor de mock da API (Mirage JS) será ativado automaticamente.
5.  **Build para produção:**
    ```bash
    npm run build
    # ou
    yarn build
    ```
    Esta etapa irá compilar a aplicação para um bundle otimizado na pasta `dist/`.
6.  **Visualizar o build de produção localmente:**
    ```bash
    npm run preview
    # ou
    yarn preview
    ```
    Isso serve o build de produção localmente, útil para verificar como a aplicação se comportará após o deploy.
7.  **Deploy (para GitHub Pages):**
    ```bash
    npm run deploy
    # ou
    yarn deploy
    ```
    Este comando automatiza o processo de deploy para o GitHub Pages, conforme configurado no `package.json`.

A estrutura do projeto é organizada para promover modularidade, clareza e facilidade de manutenção:

*   `public/`: Contém o `index.html` principal, o ponto de entrada da aplicação web no navegador.
*   `src/`: Código-fonte principal da aplicação.
    *   `src/main.tsx`: O arquivo de entrada da aplicação React, onde o componente raiz `<App />` é renderizado e o servidor de mock é inicializado.
    *   `src/App.tsx`: Componente raiz que configura o roteamento principal da aplicação usando `react-router-dom`.
    *   `src/components/`: Contém componentes React reusáveis e de granularidade menor (ex: `InputAdd`, `List`, `TodoItem`). Cada um geralmente acompanhado de seu `.module.css` para estilos encapsulados.
    *   `src/pages/`: Componentes que representam as páginas principais da aplicação (ex: `Home`, `About`, `Details`, `NotFound`).
    *   `src/shared/`: Contém recursos compartilhados entre diferentes partes da aplicação.
        *   `src/shared/layout/`: Componentes de layout globais e de página (ex: `AppLayout`, `PageLayout`), garantindo consistência visual.
        *   `src/shared/services/api/TodoAPI.ts`: Serviço que encapsula as chamadas à API de ToDos (tarefas) usando Axios, promovendo a separação de responsabilidades.
    *   `src/mocks/server.ts`: Configuração do servidor de API mockado (Mirage JS) para simular requisições e respostas do backend, permitindo o desenvolvimento independente.
*   `package.json`, `package-lock.json`: Gerenciamento de dependências do projeto, scripts de execução e metadados.
*   `tsconfig*.json`: Configurações do compilador TypeScript para diferentes ambientes (aplicação, Node.js), garantindo segurança de tipo.
*   `vite.config.ts`: Configurações específicas para o Vite, incluindo plugins (como o de React) e base de deployment.

Contribuições são muito bem-vindas! Se você deseja colaborar com este projeto, siga estas diretrizes:

1.  **Fork** o repositório.
2.  **Clone** o fork para sua máquina local.
3.  Crie uma **branch** para sua funcionalidade ou correção: `git checkout -b feature/minha-nova-feature` ou `fix/correcao-de-bug`.
4.  Faça suas alterações e **commit** com mensagens claras e descritivas.
5.  Certifique-se de que o código passa pelo **linting** (`npm run lint` ou `yarn lint`) e que não há erros de tipagem.
6.  Envie suas alterações para o seu fork: `git push origin feature/minha-nova-feature`.
7.  Abra um **Pull Request** para a branch `main` (ou `master`) deste repositório, descrevendo detalhadamente as mudanças e o problema que ele resolve.

Nenhuma licença específica foi explicitamente definida nos arquivos analisados. Por favor, consulte o repositório original para informações sobre a licença a ser aplicada.

Este README.md foi gerado automaticamente pelo README.ai com base na análise do código-fonte do projeto.