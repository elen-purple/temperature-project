export const setItem = (value) => {
  localStorage.setItem("temperature-project-index", JSON.stringify(value));
};

export const getItem = () => {
  return JSON.parse(localStorage.getItem("temperature-project-index"));
};
