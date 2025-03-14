import "./login.css";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      if (!email || !password) {
        alert('All fields are required');
        return;
      }
  
      try {
        console.log("test")
        const res = await axios.post('http://localhost:5000/user/login', { email, password });
        alert(res.data.message);
  
        localStorage.setItem('token', res.data.token); // Save token for authentication
        navigate('/Profile'); // Redirect to home/dashboard page
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
        <form onSubmit={handleLogin} className="container mt-5 p-4 border rounded shadow" style={{ maxWidth: "400px" }}>
        <h2 className="mb-4 text-center">Login</h2>
        
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    );
  };
export default Login

