import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
//useHistory virou useNavigate. SE, E SOMENTE SE, ATUALIZAR O REACT ROUTER DOM PARA A VERSÃO 6.
import axios from "axios";
import H1 from "../../Components/Title"
import ContainerSmaller from "../../Components/ContainerItems";
import Button from "../../Components/Button"
import {
  Container,
  Image,
  Paragraph,
  Input,
} from "./styles";
import MainImage from "../../assets/image-login.svg";
import ArrowImage from "../../assets/arrow.svg";

const App = () => {
  const [users, setUsers] = useState([]);
  const InputName = useRef();
  const InputAge = useRef();
  const history = useHistory()
//mudar history para navigate e useHistory para useNavigate SE, E SOMENTE SE, ATUALIZAR O REACT ROUTER DOM PARA A VERSÃO 6.
 async function addNewUser() {
    const {data: newUser} = await axios.post("http://localhost:3001/users", {
      name: InputName.current.value,
      age: InputAge.current.value,
    });
    setUsers([...users,newUser]);

    history.push("/users")
    //navigate no lugar do history, NÃO É necessário usar o push. SE, E SOMENTE SE, ATUALIZAR O REACT ROUTER DOM PARA A VERSÃO 6.
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
      </ContainerSmaller>
    </Container>
  );
};

export default App;
