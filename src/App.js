
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Registration from "./components/Registration"
import NavBar from "./components/NavBar";
import Login from "./components/login"

function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App