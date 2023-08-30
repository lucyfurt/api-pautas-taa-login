import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import '../component/dataTables.css'

function App() {
  const [fotografias, setFotografias] = useState([]);

  const fetchFotografias = async () => {
    try {
     
      const response = await axios.get('http://localhost:3007/api/v1/fotografias/');
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
  const convertToCSV = (data) => {
    const csvRows = [];
  
    // Header row
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));
  
    // Data rows
    for (const row of data) {
      const values = headers.map(header => {
        const cellValue = row[header];
        // Handle values that might contain commas or quotes
        if (typeof cellValue === 'string') {
          return `"${cellValue}"`;
        }
        return cellValue;
      });
      csvRows.push(values.join(','));
    }
  
    return csvRows.join('\n');
  };
  
  const handleExportCSV = () => {
    const csvData = convertToCSV(fotografias);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'espetaculos.csv');
  }; 

  return (
    <div className="App">
      <h1>Fotografias</h1>
      <button onClick={() => handleExportCSV()}>Baixar pedidos fotografias</button>

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
