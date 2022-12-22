import { FormInputs } from 'types';

export const localStore = (name: string, data?: string | FormInputs | null) => {
  if (data) {
    localStorage.setItem(name, JSON.stringify(data));
    return;
  }

  if (data === null) {
    localStorage.removeItem(name);
    return;
  }

  try {
    const item = localStorage.getItem(name);
    if (item) return JSON.parse(item);
  } catch (e) {
    return e;
  }
};
