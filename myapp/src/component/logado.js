import React, { Component } from 'react';
import axios from 'axios';
import Logo from '../temp/logo';
import Espetaculos from './dataEspetaculos';
import Fotografias from './dataFotografias';
import './login.css';


export default class Logado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {

    const token = localStorage.getItem('@guarda-local/token');
    if (token !== null) {
      axios.get('http://localhost:3007/api/v1/espetaculos/')
        .then(response => {
          this.setState({ data: response.data });
        })
        .catch(error => {
          console.error('Erro ao obter os dados espetaculos:', error);
        });
      
        // Chamada Fotografias
    axios.get('http://localhost:3007/api/v1/fotografias/')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.error('Erro ao obter os dados fotografias:', error);
    });
    }
  }
  handleLogout = () => {
    localStorage.removeItem('@guarda-local/token');
    window.location.reload();
  }

  render() {
    const { data } = this.state;

    const token = localStorage.getItem('@guarda-local/token');
    if (token !== null) {
      return (
        <div className="bg-white card-white">
          <Logo className="logo-canto" />
          <button className='btn btn-primary mb-2' onClick={this.handleLogout}>Sair</button>
          <div className="menu">
                    <ul>
                        <li><a href="/login">Pedido Pautas - Shows/Espetáculos</a></li>
                        <li><a href="/login">Pedido Pautas - Fotografias</a></li>
                    </ul>
                </div>
          <div className="text-center">
            <h1>Solicitações de Pautas:</h1>
            <Espetaculos data={data} />
            <Fotografias data={data}/>
          
          </div>

        </div>
      );
    } else {
      return null;
    }
  }
}
