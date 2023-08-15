import React from 'react';
import { useTable } from 'react-table';
//COLOCAR OS CAMPOS CORRESPONDENES DO FORM PAUTA SHOW /ESPETACULOS
const DataTable = ({ data }) => {
  // Defina as colunas da tabela
  const columns = [
    { Header: 'ID', accessor: '_id' },
    { Header: 'Nome', accessor: 'nome' },
    { Header: 'Email', accessor: 'email' },
    // Adicione mais colunas conforme necessário
  ];

  // Configurar a tabela usando o react-table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
