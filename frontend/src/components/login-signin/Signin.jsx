import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signin() {
  const navigate=useNavigate();
    const [data, setData] = useState({
    name:'',
    email:'',
    country:'',
    state:'',
    city:'',
    address:'',
    zincode:'',
    phone:'',
    password:''
  })
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(data)
    const result =await axios.post(`${process.env.REACT_APP_BASE_URL_REST}/register`,data).then(response=>{
      return response.data
    }).catch(error=>{
      return error
    })
    result.status==200?navigate(`/restaurant/${result.user.restaurant_id}`):alert("Error registrating .Please Try again")
  };
  function onChandeData(e){
    var id=e.target.id;
    setData({
      ...data,
      [id]:e.target.value
    })
  }

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={data.name}
          onChange={(e) =>{onChandeData(e)}}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={data.email}
          onChange={(e) =>{onChandeData(e)}}
          required
        />

        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          value={data.country}
          onChange={(e) =>{onChandeData(e)}}
         required
        />

        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          value={data.state}
          onChange={(e) =>{onChandeData(e)}}
          required
        />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={data.city}
          onChange={(e) =>{onChandeData(e)}}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={data.address}
          onChange={(e) =>{onChandeData(e)}}
          required
        />

        <label htmlFor="zincode">Pincode:</label>
        <input
          type="number"
          id="zincode"
          value={data.zincode}
          onChange={(e) =>{onChandeData(e)}}
          required
        />

        <label htmlFor="phone">Phone number:</label>
        <input
          type="tel"
          id="phone"
          value={data.phone}
          onChange={(e) =>{onChandeData(e)}}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={data.password}
          onChange={(e) =>{onChandeData(e)}}
          required
        />

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signin;
