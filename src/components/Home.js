
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import UserContext from './context/UserContext'
import styled from "styled-components";
import { Link } from "react-router-dom";


function Home() {
  const { token, name } = useContext(UserContext);
  const [extract, setExtract] = useState({})

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
    <Container>
      <Topo>
        <Texto>Olá,</Texto>
      </Topo>
      <Principal>
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
      </Principal>
      <Inferior>
        <Link to="/deposit"><Botao>Nova Entrada</Botao></Link>
        <Link to="/withdraw"><Botao>Nova Saida</Botao></Link>
      </Inferior>
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

const Principal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 446px;
  width: 326px;
  /* margin-top: 78px; */
  margin-bottom: 13px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 5px;;
`;

const Inferior = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8C11BE;
  padding-left: 25px;
  padding-right: 25px;
`;

const Botao = styled.button`
  height: 114px;
  width: 145px;
  background-color: #A328D6;
  border: 1px solid #A328D6;
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #fff;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  padding: 9px;
`;
const Extrato = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  width: 80%;
  margin-bottom: 12px;
`

export default Home