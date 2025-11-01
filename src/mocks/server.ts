import { createServer, Model } from "miragejs";

createServer({
  models: {
    todo: Model,
  },

  seeds(server) {
    server.create("todo", { id: "1", label: "Learn MirageJS", complete: true });
  },

  routes() {
    this.namespace = "api";
    
    // lista todos os "todos"
    this.get("/todos", (schema) => {
      return schema.all("todo"); // schema é um banco de dados local simulado, quando um registro é inserido ele salva ele em memória dentro do server MirageJS. O método all lista todos os registro de um modelo (model), ou seja, pegamos todoso os registros dos nossos "todos"
    });

    // cria um novo "todo" 
    this.post("/todos", (schema, request) => { // recebemos o schema que acessa o banco local, e o request nos permite acessar os dados que estão no corpo da requisição
      const attrs = JSON.parse(request.requestBody); // esses dados são string, por isso fazemos um parse para pegar todos os atributos que vem no body da requisição
      return schema.create("todo", attrs); // chamamos o schema junto com o create para criar um novo registro  ali dentro com os atributos que recebemos, retornamos um novo "todo"
    });

    // atualiza um "todo" existente
    this.put("/todos/:id", (schema, request) => { // tambem recebmos o request
      const id = request.params.id; // pegamos o params id, que é um parametro dinamico que vem na url e muda conforme o "todo" que queremos atualizar
      const todo = schema.find("todo", id); // procura no banco de dados simulado um registro com aquele id

      if (!todo) { // se o item não existir ele retorna o erro dizendo que não foi encontrado
        return { error: "Todo não encontrado" }; // o return encerra a execução da função
      }

      const newAttrs = JSON.parse(request.requestBody); // mais uma vez fazemos o parse do corpo da requisição para pegar os novos atributos
      const updated = todo.update(newAttrs); // atualiza com esses novos atributos

      return { success: true, todo: updated }; // retornado o sucesso e o "todo" atualizado
    });

    // deleta um "todo"
    this.delete("/todos/:id", (schema, request) => { // schema que acessa o banco local, request nos permite acessar os dados que estão no corpo da requisição
      const id = request.params.id; // id dinamica na url
      const todo = schema.find("todo", id); // procurando um registro com esse id

      if (!todo) { // verifica se o registro já existe
        return { error: "Todo não encontrado" }; // se não existir retorna o erro e encerra
      }

      todo.destroy(); // remove o registro do banco de dados simulado
      return { success: true, deleted: todo }; // retornado o sucesso e o "todo" atualizado
    });
  },
});
