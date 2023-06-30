
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Registration from "./components/Registration"
import NavBar from "./components/NavBar";
import Login from "./components/login"
import EnterOTP from "./components/EnterOTP";
import GetOTP from "./components/GetOTP";
import Forgot from "./components/forgotpassword";


function App() {
  return (
   
    <BrowserRouter>
    <NavBar/>
    <Routes>  
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgotpassword" element={<Forgot/>} />
        <Route path="/enter-otp" element={<EnterOTP/>} ></Route>
        <Route path="/get-otp" element={<GetOTP/>} ></Route>
        
      </Routes>
    </BrowserRouter>
  )
}
export default App