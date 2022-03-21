import React, { useState, useRef } from "react";
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
import Trash from "./assets/trash.svg";

const App = () => {
  const [users, setUsers] = useState([]);
  const InputName = useRef();
  const InputAge = useRef();
  

  function addNewUser() {
    setUsers([
      ...users,
      {
        id: Math.random(),
        name: InputName.current.value,
        age: InputAge.current.value,
      },
    ]);
    console.log(InputName.current.value, InputAge.current.value);
  }

  return (
    <Container>
      <Image alt="logo-image" src={MainImage} />
      <ContainerSmaller>
        <H1>Olá!</H1>

        <Paragraph>Nome</Paragraph>
        <Input ref={InputName} placeholder="Seu nome"></Input>

        <Paragraph>Idade</Paragraph>
        <Input ref={InputAge} placeholder="Sua idade"></Input>

        <Button onClick={addNewUser}>
          Cadastrar <img alt="arrow" src={ArrowImage} />
        </Button>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> - <p>{user.age}</p>{" "}
              <button onClick={deleteUser}>
                <img alt="trash" src={Trash} />
              </button>
            </User>
          ))}
        </ul>
      </ContainerSmaller>
    </Container>
  );
};

export default App;
