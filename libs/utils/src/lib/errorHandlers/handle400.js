export const handle400 = (error, res) => {
  return error ? res.status(400).write(error) : '';
};
