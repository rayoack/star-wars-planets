// Vou utilizar React Hooks para tornar essa parte lógica mais simples.

import React, {useState, useEffect} from 'react';

import './App.css';
import Card from './components/Card';

const App = () => {
  const [planetId, setPlanetId] = useState(
    // Randomizando o id para exibir planetas aleatórios.
    Math.floor(Math.random() * 61)
  );

  // Estado que contem o planeta Atual.
  const [planet, setPlanet] = useState([]);

  // Fazendo requisição à API com o hook useEffect.
  // A função irá pegar um planeta com o id gerado aleatóriamente em planetId.
  useEffect(() => {
    const getPlanet = async () => {
      const result = await fetch(`https://swapi.co/api/planets/${planetId}/`);
      const data = await result.json();

      // O resultado é guardado dentro do estado "planet".
      setPlanet(data);
    };

    // Primeiro pegamos o id aleatório,
    // e só quando tivermos este, chamaremos a função getPlanet.
    if (planetId) {
      getPlanet();
    }

  }, [planetId]);

  // Função que irá ser acionada pelo botão "next",
  // gerando um novo planeta aleatório.
  const nextPlanet = async () => {
    await setPlanetId(Math.floor(Math.random() * 61));
  }

  return (
    <div className="App">
      <Card planet={planet} />
      <a onClick={nextPlanet} className="nextButton">Next</a>
    </div>
  );
}

export default App;
