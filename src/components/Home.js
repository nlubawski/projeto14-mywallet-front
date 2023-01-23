
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import UserContext from './context/UserContext'
import styled from "styled-components";
import { Link } from "react-router-dom";

import { RiLogoutBoxRLine } from "react-icons/ri"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { AiOutlineMinusCircle } from "react-icons/ai"


function Home() {
  const { token, name } = useContext(UserContext);
  const [extract, setExtract] = useState({})
  let sum = 0;

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
        <Texto>Olá, {name}</Texto><RiLogoutBoxRLine size={25} color={"white"} />
      </Topo>
      <Principal>
        
          {extract.length > 0 ? 
          extract.map((item, index) => {
            const {type, date, description, value} = item;
            if(type === 'deposit'){
              sum+=value
            }else if(type === 'withdraw'){
              sum-=value
            }
            return (
              <Extrato key={index}>
                <div>data</div>
                <div>{description}</div>
                <div>{value}</div>
              </Extrato>
            )
          })
                    
          : <>Nada ainda</>}
          {extract.length > 0 ? 
          <Saldo><div>Saldo</div> <div>{sum} </div></Saldo>
          :
          <></>}

      </Principal>
      <Inferior>
        <Link to="/deposit"><Botao><AiOutlinePlusCircle size={22} color={"white"} />Nova Entrada</Botao></Link>
        <Link to="/withdraw"><Botao><AiOutlineMinusCircle size={22} color={"white"} />Nova Saida</Botao></Link>
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
  border-radius: 5px;
  position:relative;
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
  width: 100%;
  margin-bottom: 12px;
  font-size:18px
`
const Saldo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  position:absolute;
  bottom: 10px;
  font-size:22px
`

export default Home