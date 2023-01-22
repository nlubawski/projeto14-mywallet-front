import { useState } from "react"

function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setConfirmPassword] = useState("")



  return (
    <>
      <form onSubmit>
        <input
          type="text"
          placeholder="Nome"
          required
          value={name}
        />
        <input
          type="email"
          placeholder="E-mail"
          required
          value={email}
        />
        <input
          type="password"
          placeholder="Senha"
          required
          value={password}
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          required
          value={passwordConfirm  }
        />
      </form>
    </>
  )
}

export default SignUp