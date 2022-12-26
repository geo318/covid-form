import { FormInputs, FormSteps } from 'types';

export const localStore = (
  name: string,
  data?: string | FormInputs | FormSteps | null
) => {
  if (data) {
    localStorage.setItem(name, JSON.stringify(data));
    return true;
  }

  if (data === null) {
    localStorage.removeItem(name);
    return true;
  }

  try {
    const item = localStorage.getItem(name);
    if (item) return JSON.parse(item);
    return {};
  } catch (e) {
    console.log(e);
  }
};
