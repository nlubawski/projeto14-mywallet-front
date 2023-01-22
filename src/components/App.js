import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignUp from "./SignUp";
import SignIn from "./SignIn"

function App(){
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />F
        </Routes>
    </BrowserRouter>
  )
}

export default App;