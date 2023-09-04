import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import '../component/dataTables.css'
function App() {
  const [espetaculos, setEspetaculos] = useState([]);
//teste git on desktop pc
  const fetchEspetaculos = async () => {
    try {
     
      const response = await axios.get('http://localhost:3007/api/v1/espetaculos/');
      setEspetaculos(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchEspetaculos();
  }, []);

  const deleteEspetaculo = async espetaculoId => {
    try {
      console.log('Deleting user with ID:', espetaculoId);
      
      const response = await axios.delete(`http://localhost:3007/api/v1/espetaculos/${espetaculoId}`);
      console.log('Response:', response);
  
      if (response.status === 200) {
        fetchEspetaculos();
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  const handleExportCSV = () => {
    const csvData = convertToCSV(espetaculos);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'espetaculos.csv');
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
  
  return (
    <div className="App">
      <h1>Shows/Espetáculos</h1>
      <button className="btn btn-primary mb-2" onClick={() => handleExportCSV()}>Baixar pedidos espetáculos</button>

      <table>
        <thead>
          <tr>
            <th>Razão Social</th>
            <th>Email</th>
            <th>Cnpj</th>
            <th>Responsável</th>
            <th>RG Responsável</th>
            <th>CPF Responsável</th>
            <th>Endereço Responsável</th>
            <th>Telefone</th>
            <th>Nome evento</th>
            <th>Formato</th>
            <th>Select</th>
            <th>Horário e Data</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {espetaculos.map(espetaculo => (
            <tr key={espetaculo._id}>
              <td>{espetaculo.razao}</td>
              <td>{espetaculo.email}</td>
              <td>{espetaculo.cnpj}</td>
              <td>{espetaculo.responsavel}</td>
              <td>{espetaculo.rgresponsavel}</td>
              <td>{espetaculo.cpfresponsavel}</td>
              <td>{espetaculo.enderecoresponsavel}</td>
              <td>{espetaculo.telefone}</td>
              <td>{espetaculo.nomeevento}</td>
              <td>{espetaculo.formato}</td>
              <td>{espetaculo.select}</td>
              <td>{espetaculo.horariodata}</td>
              <td>{espetaculo.descricao}</td>
              <td>
                <button className="btn btn-primary mb-2" onClick={() => deleteEspetaculo(espetaculo._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
