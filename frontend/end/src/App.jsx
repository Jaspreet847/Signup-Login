import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup.jsx";
import Profile from "./Profile.jsx";
import Update from "./Update.jsx"
import {Route , Routes} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <Routes>
          <Route path ="/" element ={<Home/>}/>
          <Route path = "/login" element={<Login/>} />
          <Route path = "/signup" element={<Signup/>} />
          <Route path = "/profile" element={<Profile/>}></Route>
          <Route path ="/update" element={<Update/>}></Route>
        </Routes>  
    </>
  )
}

export default App
