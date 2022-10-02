import {Routes, Route} from "react-router-dom"
import Dashboard from "./pages/dashboard.pg"
import Home from "./pages/home.pg"
import Login from "./pages/login.pg"
import Signup from "./pages/signup.pg"
import Nav from "./comp/nav.comp"

function App() {
 return (
  <div className="App">
   <Nav />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
   </Routes>
  </div>
 )
}

export default App
