import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react";
import UserContext from './context/UserContext';

import SignUp from "./SignUp";
import SignIn from "./SignIn"
import Home from './Home';

function App() {
  const [token, setToken] = useState({})
  const [name, setName] = useState({})
  const [userId, setUserId] = useState({})
  return (
    <UserContext.Provider  value={{token, setToken, name, setName, userId, setUserId}} >
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/home" element={<Home />} />F
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;