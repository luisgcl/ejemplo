import React, { Component } from "react";

import './css/browser.css';

class Navegation extends Component {

    busquedaRef = React.createRef();

    handleDates = (e) => {
        e.preventDefault();
        const termino = this.busquedaRef.current.value;
        this.props.datosBusqueda(termino);
    }

  render() {
    return (
      <form onSubmit={this.handleDates}>
        <div className="row">
          <div className="form-group col-md-8">
            <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" 
            placeholder="Buscar producto..." />
          </div>
          <div className="form-group col-md-4">
            <input type="submit" 
            className="btn btn-lg btn-danger btn-block" 
            value="Buscar" />
          </div>
          
        </div>
      </form>
      
    );
  }
}

export default Navegation;
