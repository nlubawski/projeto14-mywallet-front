import axios from "axios"
import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import styled from "styled-components"
import env from "react-dotenv";

import UserContext from "./context/UserContext"

function SignUp() {
  const { setToken, setName, setUserId } = useContext(UserContext)
  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const navigate = useNavigate();

  function signIn(event) {
    event.preventDefault();

    
    const promise = axios.post('/sign-in', {
      email: emailValue,
      password: passwordValue,
    })

    promise.then(response => {
      const { token, name, userId } = response.data
      setToken(token);
      setName(name);
      setUserId(userId)
      navigate('/home');
    })
    promise.catch(err => {
      console.error(err.response)
    })

  }

  return (
    <>
      <Container>
        <Title>
          MyWallet
        </Title>
        <Formulario onSubmit={signIn}>
          <Input
            data-test="email"
            type="email"
            placeholder="E-mail"
            required
            value={emailValue}
            onChange={e => setEmailValue(e.target.value)}
          />
          <Input
            data-test="password"
            type="password"
            placeholder="Senha"
            required
            value={passwordValue}
            onChange={e => setPasswordValue(e.target.value)}
          />
          <Botao data-test="sign-in-submit" type="submit">Entrar </Botao>
          <Texto>
            <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
          </Texto>
        </Formulario>
      </Container>
    </>
  )
}

const Title = styled.h1`
width: 147px;
height: 50px;
left: 113px;
top: 159px;
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 50px;
color: #FFFFFF;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #8C11BE;
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
const Texto = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 14px;
  a{
    color: #fff;
  }
`;

export default SignUp