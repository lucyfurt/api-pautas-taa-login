import React, { Component } from 'react';
import './home.css';

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <div className="menu">
                    <ul>
                        <li><a href="/login">Login</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
                <div className="body">
                    <h1>Pedido de Pautas</h1>
                    <a href='/formEspetaculo'><button>PEDIDO DE PAUTAS - SHOW/ESPETÁCULOS</button></a>
                    <a href='#'><button>PEDIDO DE PAUTAS - FOTOGRAFIAS</button></a>
                </div>
            </div>
        );
    }
}

export default App;
