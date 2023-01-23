import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "./context/UserContext";

function Withdraw(){
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const {token, name} = useContext(UserContext)
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
      value: - parseFloat(value)
    };
    const promise = axios.post("http://localhost:4009/api/statement",body,config)
    promise.then(response => {
    const {data} = response;
    navigate("/home");
    });
    promise.catch(error => {
      alert("tente novamente");
    })
  }

  return (
    <form onSubmit={saveTransaction}>
      <input
        type="text"
        placeholder="Valor"
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descricao"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Salvar Entrada</button>
    </form>
  )
}

export default Withdraw
