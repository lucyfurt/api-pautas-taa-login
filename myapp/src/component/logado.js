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
      activeTab: null, // To keep track of the active tab
      espetaculosData: [],
      fotografiasData: [],
    };
  }

  fetchEspetaculosData = () => {
    axios
      .get('http://localhost:3007/api/v1/espetaculos/')
      .then((response) => {
        this.setState({
          activeTab: 'espetaculos',
          espetaculosData: response.data,
          fotografiasData: [], // Reset the other data
        });
      })
      .catch((error) => {
        console.error('Erro ao obter os dados de Espetáculos:', error);
      });
  };

  fetchFotografiasData = () => {
    axios
      .get('http://localhost:3007/api/v1/fotografias/')
      .then((response) => {
        this.setState({
          activeTab: 'fotografias',
          fotografiasData: response.data,
          espetaculosData: [], // Reset the other data
        });
      })
      .catch((error) => {
        console.error('Erro ao obter os dados de Fotografias:', error);
      });
  };

  handleLogout = () => {
    localStorage.removeItem('@guarda-local/token');
    window.location.reload();
  };

  render() {
    const { activeTab, espetaculosData, fotografiasData } = this.state;
    const token = localStorage.getItem('@guarda-local/token');

    if (token !== null) {
      return (
        <div>
          <button className="btn btn-primary mb-2" onClick={this.handleLogout}>
            Sair
          </button>
          <div className="menu">
            <ul>
              <li>
                <a href="#" onClick={this.fetchEspetaculosData}>
                  Pedido Pautas - Shows/Espetáculos
                </a>
              </li>
              <li>
                <a href="#" onClick={this.fetchFotografiasData}>
                  Pedido Pautas - Fotografias
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h1>Solicitações de Pautas:</h1>
            {/* Render the data based on the active tab */}
            {activeTab === 'espetaculos' && (
              <Espetaculos data={espetaculosData} />
            )}
            {activeTab === 'fotografias' && (
              <Fotografias data={fotografiasData} />
            )}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
