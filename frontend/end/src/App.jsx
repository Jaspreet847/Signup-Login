import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup.jsx";
import {Route , Routes} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <Routes>
          <Route path ="/" element ={<Home/>}/>
          <Route path = "/login" element={<Login/>} />
          <Route path = "/signup" element={<Signup/>} />
        </Routes>  
    </>
  )
}

export default App
