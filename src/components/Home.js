
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import UserContext from './context/UserContext'


function Home(){
  const { token, name } = useContext(UserContext);
  const [extract,setExtract] = useState({})

  function statement() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promisse = axios.get("http://localhost:4009/api/statement", config);
    promisse.then(response => {
      const { data } = response;
      setExtract(data);
    });

    promisse.catch((err) => {
      console.log(err.response);
    });
  }

  useEffect(() => {
    statement();
  }, []);
  
  
  return (
    <div>
        {extract.length > 0 ? 
          extract.map((item, index) => {
            const {type, date, description, value} = item;
            return (
              <div key={index}>
                <h1>data= {date}</h1>
                <h1>descrição= {description}</h1>
                <h1>valor= {value}</h1>
              </div>
            )
          })
  
        : <>Nada ainda</>}
      </div>
  )
}

export default Home