export const setStorage = (key, data) => {
  window.localStorage.setItem(key, data);
};

export const getStorage = (key) => {
  return window.localStorage.getItem(key);
};

export const clearStorage = () => {
  window.localStorage.clear();
};
