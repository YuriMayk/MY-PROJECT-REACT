import React from "react";
import {
  Container,
  Image,
  H1,
  Paragraph,
  Input,
  Button,
  ContainerSmaller,
  User,
} from "./styles";
import MainImage from "./assets/image-login.svg";
import ArrowImage from "./assets/arrow.svg";
import Trash from "./assets/trash.svg"

const App = () => {
  const users = [
    { id: Math.random(), name: "Yuri", age: 25 },
    { id: Math.random(), name: "Vilton", age: 18 },
  ];

  return (
    <Container>
      <Image alt="logo-image" src={MainImage} />
      <ContainerSmaller>
        <H1>Olá!</H1>

        <Paragraph>Nome</Paragraph>
        <Input placeholder="Seu nome"></Input>

        <Paragraph>Idade</Paragraph>
        <Input placeholder="Sua idade"></Input>

        <Button>
          Cadastrar <img alt="arrow" src={ArrowImage} />
        </Button>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> - <p>{user.age}</p> <button> <img alt="trash" src={Trash} /></button>
            </User>
          ))}
        </ul>
      </ContainerSmaller>
    </Container>
  );
};

export default App;
