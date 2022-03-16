import React from "react";
import { Container, H1 } from "./styles";

const App = () => {
  return (
    <div>
      <img></img>
      <div>
    <h1>Olá!</h1>

    <p>
      Nome
    </p>
    <input placeholder="Seu nome"></input>

    <p>
      Idade
    </p>
    <input placeholder="Sua idade"></input>

    <button>Cadastrar</button>
      </div>
    </div>
  );
};

export default App;
