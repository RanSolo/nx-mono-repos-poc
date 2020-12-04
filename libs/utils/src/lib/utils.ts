const { handle400, handle404 } = require("./errorHandlers");
const { getGenre, getBook, getUser } = require("./getters");
const { createBook, newBook, updateBook, saveUser, updateUser } = require("./setters");
const { isEmailUnique } = require("./validators/validators");

export {
  // --- Handlers ---
  handle400,
  handle404,
  // --- Setters ---
  //// --- Book ---
  createBook,
  newBook,
  updateBook,
  //// --- User ---
  saveUser,
  updateUser,
  // --- Getters ---
  getGenre,
  getBook,
  // --- Validators ---
  isEmailUnique,
}
