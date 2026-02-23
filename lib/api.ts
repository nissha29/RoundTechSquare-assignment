import { Todo } from "@/types/todo";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = async (page: number, limit: number = 10): Promise<Todo[]> => {
    const response = await fetch(`${API_URL}?_page=${page}&_limit=${limit}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch todos: ${response.statusText}`);
    }

    return response.json();
};
