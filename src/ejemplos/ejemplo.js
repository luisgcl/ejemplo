import React, { Component } from 'react';

class Ejemplo extends Component {
    constructor() {
            super()
            this.state = {contador: 1}
            setInterval(() => {
              this.setState({ contador: this.state.contador + 1})
            }, 1000)
          }
    render() {
        return (
            <div>
                <strong>{this.state.contador}</strong>
            </div>
        );
    }
}

export default Ejemplo;