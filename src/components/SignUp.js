import axios from "axios"
import { useState } from "react"
import {useNavigate} from "react-router-dom"

function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const navigate = useNavigate();

  function signUp(event){
    event.preventDefault();

    const promise = axios.post("http://localhost:4009/api/sign-up", {
      name,
      email,
      password,
      confirmPassword
    })

    promise.then(response =>{
      const {data} = {response}
      console.log("data", data)
      navigate("/")
    })
    promise.catch(err => {
      console.log("deu ruim")
      console.error(err.response)
    })

  }

  return (
    <>
      <form onSubmit={signUp}>
        <input
          type="text"
          placeholder="Nome"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          required
          value={confirmPassword}          
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Entrar </button>
      </form>
    </>
  )
}

export default SignUp