import React, { Component } from 'react';

class LoginButton extends Component {
    render() {
        return <button>Iniciar Sesión</button>
    }
}

class LogoutButton extends Component {
    render() {
        return <div>
            <p>Bienvenido</p>
            <button>Cerrar Sesión</button>
        </div>
    }
}

class Conditional extends Component {
    constructor() {
        super() 
            this.state = {isUserLogged: false}
        
    }
    render() {
        return (
            <div>
                <h4>Creando condicionales</h4>
                {this.state.isUserLogged ? <LoginButton /> : <LogoutButton /> }
                
            </div>
        );
    }
}

export default Conditional;