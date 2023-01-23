import axios from "axios"
import { useState, useContext } from "react"
import {useNavigate} from "react-router-dom"

import UserContext from "./context/UserContext"

function SignUp() {
  const {setToken, setName, setUserId} = useContext(UserContext)
  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const navigate = useNavigate();

  function signIn(event){
    event.preventDefault();

    const promise = axios.post("http://localhost:4009/api/sign-in", {
      email: emailValue,
      password: passwordValue,
    })

    promise.then(response =>{
      const {token, name, userId} = response.data
      console.log("data",token, name, userId)
      setToken(token);
      setName(name);
      setUserId(userId)
      //navigate('/');
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
          value={emailValue}
          onChange={e => setEmailValue(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          required
          value={passwordValue}
          onChange={e => setPasswordValue(e.target.value)}
        />
        <button type="submit">Entrar </button>
      </form>
    </>
  )
}

export default SignUp