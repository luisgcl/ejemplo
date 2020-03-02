import React, { Component } from 'react';

import Navegation from './components/Navegation';






import './App.css';



class App extends Component {
  
state = {
  termino : ''
}

  datosBusqueda = (termino) => {
    this.setState({
      termino
    })
  }

  render () {
    

    return (
      <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Productos</p>
        <Navegation
        datosBusqueda={this.datosBusqueda} />
      </div>
      {this.state.termino}
    </div>
    )
  }
}


export default App;
