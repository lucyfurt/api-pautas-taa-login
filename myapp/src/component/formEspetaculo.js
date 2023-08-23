import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <h2>Formulário Shows/Espetáculos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="razao">Razão Social:</label>
          <input
            type="text"
            id="razao"
            name="razao"
            value={formData.razao}
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
          <label htmlFor="cnpj">Cnpj:</label>
          <input
            type="text"
            id="cnpj"
            name="cnpj"
            value={formData.cnpj}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="responsavel">Nome do Responsável:</label>
          <input
            type="text"
            id="responsavel"
            name="responsavel"
            value={formData.responsavel}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="rgresponsavel">RG do Responsável:</label>
          <input
            type="text"
            id="rgresponsavel"
            name="rgresponsavel"
            value={formData.rgresponsavel}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cpfresponsavel">CPF do Responsável:</label>
          <input
            type="text"
            id="cpfresponsavel"
            name="cpfresponsavel"
            value={formData.cpfresponsavel}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="enderecoresponsavel">Endereço do Responsável:</label>
          <input
            type="text"
            id="enderecoresponsavel"
            name="enderecoresponsavel"
            value={formData.enderecoresponsavel}
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
          <label htmlFor="nomeevento">Nome do evento:</label>
          <input
            type="text"
            id="nomeevento"
            name="nomeevento"
            value={formData.nomeevento}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="formato">Formato:</label>
          <input
            type="text"
            id="formato"
            name="formato"
            value={formData.formato}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="select">Select:</label>
          <input
            type="text"
            id="select"
            name="select"
            value={formData.select}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="horariodata">Data e Horário:</label>
          <input
            type="text"
            id="horariodata"
            name="horariodata"
            value={formData.horariodata}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="descricao">Descrição do evento:</label>
          <input
            type="text"
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormEspetaculo;
