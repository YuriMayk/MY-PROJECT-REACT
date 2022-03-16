import React from "react";
import { Container,Image, H1, Paragraph, Input, Button, ContainerSmaller } from "./styles";

const App = () => {
  return (
    <Container>
      <Image></Image>
      <ContainerSmaller>
    <H1>Olá!</H1>

    <Paragraph>
      Nome
    </Paragraph>
    <Input placeholder="Seu nome"></Input>

    <Paragraph>
      Idade
    </Paragraph>
    <Input placeholder="Sua idade"></Input>

    <Button>Cadastrar</Button>
      </ContainerSmaller>
    </Container>
  );
};

export default App;
