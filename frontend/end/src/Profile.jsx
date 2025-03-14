
import  {useState, useEffect,} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
    const [users, setUsers] = useState([]);

  
    useEffect(() => {
      axios.get('http://localhost:5000/user/Profile')
        .then(res => setUsers(res.data))
        .catch(err => console.log(err));
    }, []);

    const handledelete = (id) =>{
      axios.delete(`http://localhost:5000/user/delete/${id}`)
      .then(()=>{
        alert(`data successfully deleted`)

        setUsers(users.filter((user)=> user._id !==id))
      }).catch((err)=>{
        console.log(err)
      })
    }
  
    return (
        <div>
        <h1>Users List</h1>
        <div className="card-container">
          {users.map((user, index) => (
            <div className="card" key={index}>
              <h3>{user.email}</h3>
              <p>Password: {user.password}</p>
              <button onClick={()=>handledelete(user._id)}>Delete</button>
              <Link to="/update" className="text-decoration-none"><button>Edit Button</button></Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Profile
