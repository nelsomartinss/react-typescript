import { createServer, Model } from "miragejs";

createServer({
  // configurando tudo que vai ter dentro do servidor
  models: {
    todos: Model, // uma tabela no backend chamada todos
  },

  routes() {
    this.namespace = "api"; // prefixo para todas as rotas
    this.get("/todos", () => {
      return [{ id: "1", label: "Estudar React", complete: true }];
    }); // rotas que são usadas para simular uma requisição de GET, isso vai fazer o mirage.js interceptar todas as requisições feitas pelo navegador para /api/todos
  },
});
