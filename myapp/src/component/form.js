import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <h2>Formulário - Fotografias</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="rg">RG:</label>
          <input
            type="text"
            id="rg"
            name="rg"
            value={formData.rg}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="endereco">Endereço:</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="faculdade">Faculdade:</label>
          <input
            type="text"
            id="faculdade"
            name="faculdade"
            value={formData.faculdade}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="curso">Curso:</label>
          <input
            type="text"
            id="curso"
            name="curso"
            value={formData.curso}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="quantd">Quantidade de alunos:</label>
          <input
            type="text"
            id="quantd"
            name="quantd"
            value={formData.quantd}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
