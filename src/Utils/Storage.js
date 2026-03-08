export const saveData = (data) => {
  localStorage.setItem("cvData", JSON.stringify(data));
};

export const loadData = () => {
  const data = localStorage.getItem("cvData");
  return data ? JSON.parse(data) : null;
};