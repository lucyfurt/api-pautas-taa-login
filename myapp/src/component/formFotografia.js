import React, { useState } from 'react';
import axios from 'axios';
import './formEspetaculo.css'
const Form = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    rg: '',
    endereco: '',
    telefone: '',
    faculdade: '',
    curso: '',
    quant: '',
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
      const response = await axios.post('http://localhost:3007/api/v1/fotografias/', formData);
      console.log(response.data); 
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Formulário - Fotografias</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome" className="form-label">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
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
          <label htmlFor="cpf" className="form-label">CPF:</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="rg" className="form-label">RG:</label>
          <input
            type="text"
            id="rg"
            name="rg"
            value={formData.rg}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="endereco" className="form-label">Endereço:</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={formData.endereco}
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
          <label htmlFor="faculdade" className="form-label">Faculdade:</label>
          <input
            type="text"
            id="faculdade"
            name="faculdade"
            value={formData.faculdade}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="curso" className="form-label">Curso:</label>
          <input
            type="text"
            id="curso"
            name="curso"
            value={formData.curso}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="quantd" className="form-label">Quantidade de alunos:</label>
          <input
            type="text"
            id="quantd"
            name="quantd"
            value={formData.quantd}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="form-submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
