const Espetaculo = require('../model/modelEspetaculo');

exports.createEspetaculo = async (req, res) => {
  try {
    const espetaculo = new Espetaculo(req.body);
    await espetaculo.save();
    res.status(201).json(espetaculo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEspetaculos = async (req, res) => {
  try {
    const espetaculos = await Espetaculo.find();
    res.status(200).json(espetaculos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteEspetaculo = async (req, res) => {
  try {
    const espetaculoId = req.params.id;
    await Espetaculo.findByIdAndDelete(espetaculoId);
    res.status(200).json({ message: 'Espetáculo excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir espetáculo:', error);
    res.status(500).json({ message: 'Erro ao excluir espetáculo' });
  }
};


