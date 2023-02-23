import axios from 'axios';
import { getToken } from 'utils/localStorage';

const baseURL = 'https://pre-onboarding-selection-task.shop';

export const todoClient = axios.create({
  baseURL: `${baseURL}/todo/`,
});

todoClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
