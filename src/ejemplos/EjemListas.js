import React, { Component } from 'react';
import cars from '../data/cars.json';

class EjemListas extends Component {
    render() {
        return (
            <div>
                <ul>
                    {cars.map(car => {
                        return (
                            <li key={car.id}>
                            <p><strong>Nombre: </strong>{car.name}<strong>Marca: </strong>{car.company}</p>
                        </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default EjemListas;