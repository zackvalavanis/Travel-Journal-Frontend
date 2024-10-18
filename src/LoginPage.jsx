import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import './LoginPage.css';

export function LoginPage() {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { setCurrentUser, setIsLoggedIn } = useContext(AuthContext); // Ensure this line is correct

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);

    axios.post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        const { jwt } = response.data;
        axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
        localStorage.setItem("jwt", jwt);
        event.target.reset();

        // Fetch current user data
        return axios.get("http://localhost:3000/users/current.json");
      })
      .then((userResponse) => {
        setCurrentUser(userResponse.data); // Ensure this is the correct usage
        setIsLoggedIn(true);
        navigate('/');
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(['Invalid email or password']);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Email: <input type='email' name='email' />
        </div>
        <div>
          Password: <input type='password' name='password' />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
