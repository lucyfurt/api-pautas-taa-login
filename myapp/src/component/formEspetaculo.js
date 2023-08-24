import React, { useState } from 'react';
import axios from 'axios';
import './formEspetaculo.css'
const FormEspetaculo = () => {
  const [formData, setFormData] = useState({
    razao: '',
    email: '',
    cnpj: '',
    responsavel: '',
    rgresponsavel: '',
    cpfresponsavel: '',
    enderecoresponsavel: '',
    telefone: '',
    nomeevento: '',
    formato: '',
    select: '',
    horariodata: '',
    descricao: ''
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3007/api/v1/espetaculos/', formData);
      console.log(response.data); // Assuming the server returns some data upon successful submission
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Formulário Shows/Espetáculos</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="razao" className="form-label">Razão Social:</label>
          <input
            type="text"
            id="razao"
            name="razao"
            value={formData.razao}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cnpj" className="form-label">Cnpj:</label>
          <input
            type="text"
            id="cnpj"
            name="cnpj"
            value={formData.cnpj}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="responsavel" className="form-label">Nome do Responsável:</label>
          <input
            type="text"
            id="responsavel"
            name="responsavel"
            value={formData.responsavel}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="rgresponsavel" className="form-label">RG do Responsável:</label>
          <input
            type="text"
            id="rgresponsavel"
            name="rgresponsavel"
            value={formData.rgresponsavel}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cpfresponsavel" className="form-label">CPF do Responsável:</label>
          <input
            type="text"
            id="cpfresponsavel"
            name="cpfresponsavel"
            value={formData.cpfresponsavel}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="enderecoresponsavel" className="form-label">Endereço do Responsável:</label>
          <input
            type="text"
            id="enderecoresponsavel"
            name="enderecoresponsavel"
            value={formData.enderecoresponsavel}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="telefone" className="form-label">Telefone:</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="nomeevento" className="form-label">Nome do evento:</label>
          <input
            type="text"
            id="nomeevento"
            name="nomeevento"
            value={formData.nomeevento}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="formato" className="form-label">Formato:</label>
          <input
            type="text"
            id="formato"
            name="formato"
            value={formData.formato}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="select" className="form-label">Select:</label>
          <input
            type="text"
            id="select"
            name="select"
            value={formData.select}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="horariodata" className="form-label">Data e Horário:</label>
          <input
            type="text"
            id="horariodata"
            name="horariodata"
            value={formData.horariodata}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="descricao" className="form-label">Descrição do evento:</label>
          <input
            type="text"
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="form-submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormEspetaculo;
