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

    this.get("/todos", (schema) => {
      return schema.all("todo");
    });

    this.post("/todos", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("todo", data);
    });

    this.put("/todos/:id", (schema, request) => {
      const id = request.params.id;
      const todo = schema.find("todo", id);

      if (!todo) {
        return { error: "Todo not found" };
      }

      const newData = JSON.parse(request.requestBody);
      const updated = todo.update(newData);

      return { success: true, todo: updated };
    });

    this.delete("/todos/:id", (schema, request) => {
      const id = request.params.id;
      const todo = schema.find("todo", id);

      if (!todo) {
        return { error: "Todo not found" };
      }

      todo.destroy();
      return { success: true, deleted: todo };
    });
  },
});
