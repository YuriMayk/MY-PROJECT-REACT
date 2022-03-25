import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import H1 from "../../Components/Title"
import ContainerSmaller from "../../Components/ContainerItems"
import Button from "../../Components/Button"
import {
  Container,
  Image,
  User,
} from "./styles";
import MainImage from "../../assets/people-users.svg";
import ArrowImage from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

const Users = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory()

  useEffect(() =>{
    async function fetchUsers(){
      const {data:newUsers} = await axios.get("http://localhost:3001/users")
      
      setUsers(newUsers)
      
    }
    fetchUsers()
  },[])

  async function deleteUser(UserId) {
    await axios.delete(`http://localhost:3001/users/${UserId}`)
    const newUsers = users.filter((user) => user.id !== UserId);

    setUsers(newUsers);
  }

  function goToHome (){

    history.push("/")

  }

  return (
    <Container>
      <Image alt="logo-image" src={MainImage} />
      <ContainerSmaller isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> - <p>{user.age}</p>{" "}
              <button onClick={() => deleteUser(user.id)}>
                <img alt="trash" src={Trash} />
              </button>
            </User>
          ))}
        </ul>
        <Button isBack={true} onClick={goToHome}>
        <img alt="arrow" src={ArrowImage} /> Voltar 
        </Button>
      </ContainerSmaller>
    </Container>
  );
};

export default Users;
