import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react";
import UserContext from './context/UserContext';

import SignUp from "./SignUp";
import SignIn from "./SignIn"
import Home from './Home';
import Withdraw from './Withdraw.js';
import Deposit from './Deposit';
import EditDeposit from './EditDeposit';
import EditWithdraw from './EditWithdraw';

function App() {
  const [token, setToken] = useState({})
  const [name, setName] = useState({})
  const [userId, setUserId] = useState({})
  return (
    <UserContext.Provider value={{ token, setToken, name, setName, userId, setUserId }} >
      <BrowserRouter>
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/edit-deposit/:id" element={<EditDeposit />} />
          <Route path="/edit-withdraw/:id" element={<EditWithdraw />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;