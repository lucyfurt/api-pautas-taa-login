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
                    <h1 className="main-heading">Pedido de Pautas</h1>
                    <div className="button-container">
                        <a className="custom-button" href='/formEspetaculo'>
                            PEDIDO DE PAUTAS - SHOW/ESPETÁCULOS
                        </a>
                        <a className="custom-button" href='#'>
                            PEDIDO DE PAUTAS - FOTOGRAFIAS
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
