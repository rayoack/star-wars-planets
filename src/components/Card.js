import React, {
    Component
} from 'react';

import './Card.css'

class Card extends Component {
    
    render() {
        // Armazenando o planeta atual.
        const planets = this.props.planet;

        // Fazendo contagem dos filmes em que o planeta apareceu.
        let film = '';
        let countFilm = 0;

        for(film in planets.films) {
            countFilm++;
        }

        return ( 
            <div className="card">
                <div className = 'container'>
                    <div className="title-container">
                        <h1 className="planet-title">{planets.name}</h1>
                    </div>
                    <div className="planet-desc">
                        <p>POPULATION: {planets.population}</p>
                        <p>CLIMATE: {planets.climate}</p>
                        <p>TERRAIN: {planets.terrain}</p>
                    </div>
                    <div className="planet-films">
                        <p>FEATURED IN {countFilm} FILMS</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;