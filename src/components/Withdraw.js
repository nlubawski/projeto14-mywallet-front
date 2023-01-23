import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "./context/UserContext";
import styled from "styled-components";

function Withdraw() {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const { token, name } = useContext(UserContext)
  const navigate = useNavigate();
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }

  function saveTransaction(event) {
    event.preventDefault();
    const body = {
      description,
      type: "withdraw",
      value: parseFloat(value)
    };
    const promise = axios.post(`${process.env.API_URL}/statement`, body, config)
    promise.then(response => {
      const { data } = response;
      navigate("/home");
    });
    promise.catch(error => {
      alert("tente novamente");
    })
  }

  return (
    <Container>
      <Topo>
        <Texto>Olá, {name}</Texto>
      </Topo>
      <Formulario onSubmit={saveTransaction}>
        <Input
          data-test="registry-amount-input"
          type="text"
          placeholder="Valor"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Input
          data-test="registry-name-input"
          type="text"
          placeholder="Descricao"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Botao 
        data-test="registry-save"
        type="submit">Salvar Entrada</Botao>
      </Formulario>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #8C11BE;
`;

const Topo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
  height: 78px;
  width: 100%;
  /* position: fixed;
  top: 0;
  left: 0; */
  z-index: 2;
`
const Texto = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
`;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  height: 45px;
  width: 303px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #666;
  margin-bottom: 6px;
  &::placeholder {
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #dbdbdb;
  }
`;
const Botao = styled.button`
  height: 45px;
  width: 303px;
  background-color: #A328D6;
  border: 1px solid #A328D6;
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #fff;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default Withdraw
