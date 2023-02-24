import axios, { AxiosResponse } from 'axios';
import { getToken } from 'utils/localStorage';
import { TodoData } from './types/todo.types';

const baseURL = 'https://pre-onboarding-selection-task.shop';

export const todoClient = axios.create({
  baseURL: `${baseURL}/todos`,
});

todoClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export function requestLoadTodos(): Promise<TodoData[]> {
  return todoClient.get('').then((res: AxiosResponse<TodoData[]>) => {
    const todos = res.data;
    return new Promise((res, rej) => res(todos));
  });
}

export function requestCreateTodo(todo: TodoData['todo']): Promise<TodoData> {
  return todoClient.post('', { todo }).then((res: AxiosResponse<TodoData>) => {
    const createdTodo = res.data;
    return new Promise((res, rej) => res(createdTodo));
  });
}
