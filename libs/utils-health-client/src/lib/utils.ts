const { getMedications, getPatient, getAilments } = require("./getters");
const { createPatient, newPatient, updatePatient, saveAilment, updateAilment } = require("./setters");
const { isEmailUnique } = require("./validators/validators");

export {
  // --- Setters ---
  //// --- Patient ---
  createPatient,
  newPatient,
  updatePatient,
  //// --- Ailment ---
  saveAilment,
  updateAilment,
  // --- Getters ---
  getMedications,
  getPatient,
  getAilments,
  // --- Validators ---
  isEmailUnique,
}
