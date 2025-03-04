import "./login.css";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      const Navigate = useNavigate();


   const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!email || !password){
        alert('all fields are required')
        return;
    }
    
    axios
    .post('http://localhost:9003/user/signup',{email,password})
    .then((result) => {
        console.log(result);
        alert('signup successfully')
        Navigate('/')                      //it will point towards login route open login page
    })
    .catch((err) => {
        console.log(err);
        alert('failed to signup')
    })
    }
    return (
        <div className="formain">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  value={email}
            onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" classNme="w-100 mb-2">Login
                </Button>
            </Form>
        </div>

    )
}

export default Login

