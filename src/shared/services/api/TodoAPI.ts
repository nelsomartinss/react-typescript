import axios from "axios"; // biblioteca usada para fazer requisições HTTP (CRUD: GET, POST, PUT, DELETE)

const axiosInstance = axios.create(); // Criando uma instância personalizada do axios, é a base de tudo que vem depois

// criando objeto que agrupa funções relacionadas a API "todos"
export const TodoAPI = {
  // acessando uma API RESTFUL
  async get() {
    // definir um método async para buscar todos os todos
    const response = await axiosInstance.get("/api/todos"); // chamar o mock, requisição .get para o endpoint "api/todos", o await vai esperar a resposta do servidor simulado antes de continuar
    console.log(response); // exibindo resposta da requisição 'MIRAGE [200] ...'
    return response.data.todos; // depois da resposta ele retorna apenas os dados uteis (data é o corpo da mensagem), (todos acessa o array tarefas retornado pelo mirage)
  },
  async create(newTodo: { label: string; complete: boolean }) {
    // envia os dados para a API, newTodo é o corpo da requisição com os dados de exemplo
    const response = await axiosInstance.post("api/todos", newTodo);
    return response.data; // retorna o novo todo criado
  },
  async update(
    id: string,
    updatedTodo: { label?: string; complete?: boolean }
  ) { // id é identificador do 'todo' que desejo atualizar
    // updatedTodo é um objeto com os novos dados que quero colocar nos campos
    const response = await axiosInstance.put(`api/todos/${id}`, updatedTodo); // envia uma requisição put para o servidor com o id na url
    return response.data; // retorna a resposta
  },
  async delete(id: string) { // identificador do 'todo' que será removido
    const response = await axiosInstance.delete(`api/todos/${id}`); // requisição delete para o servidor com o id na url
    return response.data; // resposta da API { success: true, deleted: {...} }
  }
};
