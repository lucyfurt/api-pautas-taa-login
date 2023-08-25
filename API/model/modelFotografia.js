const mongoose = require('mongoose');

const fotografiaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  cpf: { type: String, required: true },
  rg: { type: String, required: true },
  endereco: { type: String, required: true },
  telefone: { type: String, required: true },
  faculdade: { type: String, required: true },
  curso: { type: String, required: true },
  quantd: { type: String, required: true },
});

const Fotografia = mongoose.model('Fotografia', fotografiaSchema);

module.exports = Fotografia;
