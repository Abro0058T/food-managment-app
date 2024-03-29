import React, { useState } from 'react';
import { getRestaurantData } from '../../redux/restaurants/restaurantsActions';
import axios from 'axios';
import style from "./login.module.css"
import {Navigate, useNavigate} from 'react-router-dom'

function Login() {
  const navigate=useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [toggle,settoggle]=useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    var result
    if(toggle){
       result=await axios.post(`http://localhost:3000/api/v1/collector/login`,{
        email,password
      }).then(response=>{
        // console.log(response.data)
        return response.data
        
      }).catch(error=>{
        return error.response.data
      })
      if(result.status===401){
        alert(result.message)
      }
      else{
        // console.log(result.data)
       navigate(`/collector/${result.data.collector_id}`)
      } 
    
    }
else{

   result=await axios.post(`http://localhost:3000/api/v1/login`,{
    email,password
  }).then(response=>{
    return response.data
    
  }).catch(error=>{
    return error.response.data
  })
  if(result.status===401){
    alert(result.message)
  }
  else{
    console.log("hello wold ")
   navigate(`/restaurant/${result.data.restaurant_id}`)
  } 
  };
}


  return (
    <div className={style.login}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit} className={style.formContainer}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div  className={style.checkBox}>
      <p className={style.plogin}>Check for collector</p>
      <input type='checkbox' checked={toggle} onChange={()=>settoggle(!toggle)}/>
      </div>
        <button className={style.buttonLogin} type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
