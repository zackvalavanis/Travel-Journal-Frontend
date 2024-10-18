import "./LogoutLink.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react';
import { AuthContext } from './AuthContext'; 

export function LogoutLink ( { children } ) { 
  const navigate = useNavigate();
  const { setCurrentUser, setIsLoggedIn } = useContext(AuthContext);

  const handleClick = (event) => { 
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    setCurrentUser(null); // Clear user data
    setIsLoggedIn(false); // Set logged in state to false
    navigate('/')
  }

  return ( 
    <div>
      <a onClick={handleClick} className="logout-button">
      {children} </a>
    </div>
  );
}