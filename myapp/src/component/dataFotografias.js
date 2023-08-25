import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../component/dataTables.css'

function App() {
  const [fotografias, setFotografias] = useState([]);

  const fetchFotografias = async () => {
    try {
     
      const response = await axios.get('http://localhost:3007/api/v1/espetaculos/');
      setFotografias(response.data);
    } catch (error) {
      console.error('Error fetching fotografias:', error);
    }
  };

  useEffect(() => {
    fetchFotografias();
  }, []);

  const deleteFotografia = async fotografiaId => {
    try {
      console.log('Deleting fotografia with ID:', fotografiaId);
      
      const response = await axios.delete(`http://localhost:3007/api/v1/fotografias/${fotografiaId}`);
      console.log('Response:', response);
  
      if (response.status === 200) {
        setFotografias();
      }
    } catch (error) {
      console.error('Error deleting fotografia:', error);
    }
  };
  

  return (
    <div className="App">
      <h1>Fotografias</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>CPF</th>
            <th>RG</th>
            <th>Endereço</th>
            <th>Telefone</th>
            <th>Faculdade</th>
            <th>Curso</th>
            <th>Quantidade de Alunos</th>            
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {fotografias.map(fotografia => (
            <tr key={fotografia._id}>
              <td>{fotografia.nome}</td>
              <td>{fotografia.email}</td>
              <td>{fotografia.cpf}</td>
              <td>{fotografia.rg}</td>
              <td>{fotografia.endereco}</td>
              <td>{fotografia.telefone}</td>
              <td>{fotografia.faculdade}</td>
              <td>{fotografia.curso}</td>
              <td>{fotografia.quantd}</td>            
              <td>
                <button onClick={() => deleteFotografia(fotografia._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
