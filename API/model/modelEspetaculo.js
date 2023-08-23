const mongoose = require('mongoose');

const espetaculoSchema = new mongoose.Schema({
  razao: { type: String, required: true },
  email: { type: String, required: true },
  cnpj: { type: String, required: true },
  responsavel: { type: String, required: true },
  rgresponsavel: { type: String, required: true },
  cpfresponsavel: { type: String, required: true },
  enderecoresponsavel: { type: String, required: true },
  telefone: { type: String, required: true },
  nomeevento: { type: String, required: true },
  formato: { type: String, required: true },
  select: { type: String, required: true },
  horariodata: { type: String, required: true },
  descricao: { type: String, required: true },
 
});

const Espetaculo = mongoose.model('Espetaculo', espetaculoSchema);

module.exports = Espetaculo;
