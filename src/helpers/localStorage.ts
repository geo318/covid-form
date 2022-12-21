export const localStore = (name: string, data: any) => {
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
    console.log(e);
  }
};
