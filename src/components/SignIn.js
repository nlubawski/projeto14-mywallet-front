import axios from "axios"
import { useState } from "react"
import {useNavigate} from "react-router-dom"

function SignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  function signIn(event){
    event.preventDefault();

    const promise = axios.post("http://localhost:4009/api/sign-in", {
      email,
      password,
    })

    promise.then(response =>{
      const {data} = {response}
      console.log("data", data)
      navigate("/")
    })
    promise.catch(err => {
      console.log("deu ruim login")
      console.error(err.response)
    })

  }

  return (
    <>
      <form onSubmit={signIn}>
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
        <button type="submit">Entrar </button>
      </form>
    </>
  )
}

export default SignUp