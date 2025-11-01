import { createServer, Model } from "miragejs";

createServer({
  models: {
    todo: Model,
  },

 seeds(server) {
    const todosAsString = localStorage.getItem("MOCK_TODOS");
    if (!todosAsString) return;

    const todos = JSON.parse(todosAsString);
    todos.forEach((todo: {}) => {
      server.create("todo", todo);
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/todos", (schema) => {
      return schema.all("todo");
    });

    this.post("/todos", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);

      const todo = schema.create("todo", attrs); // é necessário criar o todo antes de salvar no localStorage

      // Salvando no localStorage
      const todos = schema.all("todo").models.map((m) => m.attrs);
      localStorage.setItem("MOCK_TODOS", JSON.stringify(todos));

      return todo;
    });

    this.put("/todos/:id", (schema, request) => {
      const id = request.params.id;
      const todo = schema.find("todo", id);

      if (!todo) {
        return { error: "Item não encontrado" };
      }

      const newAttrs = JSON.parse(request.requestBody);
      const updated = todo.update(newAttrs);

      // Salvando no localStorage
      const todos = schema.all("todo").models.map((m) => m.attrs);
      localStorage.setItem("MOCK_TODOS", JSON.stringify(todos));

      return { success: true, todo: updated };
    });

    this.delete("/todos/:id", (schema, request) => {
      const id = request.params.id;
      const todo = schema.find("todo", id);

      if (!todo) {
        return { error: "Item não encontrado" };
      }

      todo.destroy();

      // Salvando no localStorage
      const todos = schema.all("todo").models.map((m) => m.attrs);
      localStorage.setItem("MOCK_TODOS", JSON.stringify(todos));

      return { success: true, deleted: todo };
    });
  },
});
