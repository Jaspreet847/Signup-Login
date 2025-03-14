import "./signup.css";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate , Link } from "react-router-dom";

                
               
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSignup = async (e) => {
      e.preventDefault();
  
      if (!email || !password) {
        alert('All fields are required');
        return;
      }
  
      try {
        const res = await axios.post('http://localhost:5000/user/signup', { email, password });
        alert(res.data.message);
        navigate('/login');
      } catch (err) {
        console.log(err);
        alert(err.response?.data?.message || 'Signup failed');
      }
    };
  
    return (
        <form
        onSubmit={handleSignup}
        className="container mt-5 p-4 border rounded shadow bg-light"
        style={{ maxWidth: "400px" }}
      >
        <h2 className="mb-4 text-center">Signup</h2>
      
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
      
        <button type="submit" className="btn btn-success w-100">
          Signup
        </button>
      
        <p className="mt-3 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-decoration-none">
            Login
          </Link>
        </p>
      </form>
      
    );
  };
      
                export default Signup
                
                
                
                
                
