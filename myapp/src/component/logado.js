import React, { Component } from 'react';
import axios from 'axios';
import { useTable } from 'react-table';
import Logo from '../temp/logo';
import DataTable from './DataTable'; 
import './login.css';
//teste git
export default class Logado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], // Estado para armazenar os dados do MongoDB
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('@guarda-local/token');
    if (token !== null) {
      axios.get('http://localhost:3007/api/v1/users/') // Substitua pela rota correta da sua API
        .then(response => {
          this.setState({ data: response.data }); // Armazene os dados no estado
        })
        .catch(error => {
          console.error('Erro ao obter os dados:', error);
        });
    }
  }

  handleLogout = () => {
    localStorage.removeItem('@guarda-local/token');
    window.location.reload();
  }

  render() {
    const { data } = this.state; // Obtenha os dados do estado

    const token = localStorage.getItem('@guarda-local/token');
    if (token !== null) {
      return (
        <div className="bg-white card-white">
          <Logo className="logo-canto" />
          <button className='btn btn-primary mb-2' onClick={this.handleLogout}>Sair</button>
          <div className="text-center">
            <h3>Solicitações de Pautas:</h3>

            {/* Renderize o componente DataTable e passe os dados como prop */}
            <DataTable data={data} />

          </div>

        </div>
      );
    } else {
      return null;
    }
  }
}
