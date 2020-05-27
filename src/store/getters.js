export const getCategory = ({ categories }) => id =>
  categories.find(item => item.id === id);
export const getRace = ({ races }) => id => races.find(item => item.id === id);
