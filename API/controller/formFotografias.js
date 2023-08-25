const Fotografia = require('../model/modelFotografia');

exports.createFotografias = async (req, res) => {
  try {
    const fotografia = new Fotografia(req.body);
    await fotografia.save();
    res.status(201).json(fotografia);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getFotografias = async (req, res) => {
  try {
    const fotografias = await Fotografia.find();
    res.status(200).json(fotografias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteFotografia = async (req, res) => {
  try {
    const fotografiaId = req.params.id;
    await Fotografia.findByIdAndDelete(fotografiaId);
    res.status(200).json({ message: 'Fotografia excluída com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir fotografia:', error);
    res.status(500).json({ message: 'Erro ao excluir fotografia' });
  }
};