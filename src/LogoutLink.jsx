import "./LogoutLink.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export function LogoutLink ( { children } ) { 
  const navigate = useNavigate();

  const handleClick = (event) => { 
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    navigate('/')
  }

  return ( 
    <div>
      <a onClick={handleClick} className="logout-button">
      {children} </a>
    </div>
  );
}