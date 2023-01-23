import axios from "axios"
import { useState } from "react"
import {useNavigate, Link} from "react-router-dom"
import styled from "styled-components"

function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const navigate = useNavigate();

  function signUp(event){
    event.preventDefault();

    const promise = axios.post('/sign-up', {
      name,
      email,
      password,
      confirmPassword
    })

    promise.then(response =>{
      const {data} = {response}
      navigate("/")
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
        <Formulario onSubmit={signUp}>
          <Input
            data-test="name"
            type="text"
            placeholder="Nome"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            data-test="email"
            type="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            data-test="password"
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Input
            data-test="conf-password"
            type="password"
            placeholder="Confirme a senha"
            required
            value={confirmPassword}          
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <Botao data-test="sign-up-submit" type="submit">Entrar </Botao>
          <Texto>
            <Link to="/sign-in">Já tem uma conta? Entre agora!</Link>
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