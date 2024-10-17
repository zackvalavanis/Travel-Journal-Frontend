import './SignupPage.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



export function SignupPage () { 
  const [ errors, setErrors] = useState([]);
  const navigate = useNavigate();


  const handleSubmit = (event) => { 
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post('http://localhost:3000/users.json', params).then((response) => { 
        console.log(response.data);
        event.target.reset();
        response.data;
        navigate('/');
      })
      .catch((error) => { 
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  }; 


  return ( 
    <div id='signup' className='signup'>
      <h1>Signup</h1>
        <ul>
          { errors.map((error) => ( 
            <li key={error}>{error}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <div>
            Name: <input type='text' name='name' required />
          </div>
          <div>
            Email: <input type='email' name='email' />
          </div>
          <div>
            Password: <input type='password' name='password' />
          </div>
          <div>
            Password Confirmation: <input name='password_confirmation' type='password' />
          </div>
          <button type='submit'>Signup</button>
        </form>
    </div>
  )
}