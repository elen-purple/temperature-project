export const setItem = (value) => {
  localStorage.setItem("index", JSON.stringify(value));
};

export const getItem = () => {
  return JSON.parse(localStorage.getItem("index"));
};
