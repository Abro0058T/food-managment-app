import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function CollectorSiginin() {
  const navigate=useNavigate();
    const [data, setData] = useState({
    name:'',
    email:'',
    area:'',
    restaurants_under:'d84dff37-b07d-4764-a617-9ca86dd6fd0b',
    password:''
  })
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(data)
    const result =await axios.post(`${process.env.REACT_APP_BASE_URL_REST}/collector/register`,data)
    .then(response=>{
      return response.data
    }).catch(error=>{
      return error
    })
    // console.log(result)
    result.status==200?navigate(`/collector/${result.user.restaurant_id}`):alert("Error registrating .Please Try again")
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

        <label htmlFor="area">Area:</label>
        <input
          type="text"
          id="area"
          value={data.area}
          onChange={(e) =>{onChandeData(e)}}
         required
        />

        {/* <label htmlFor="restaurants">Restaurants:</label>
        <input
          type="text"
          id="restaurants"
          value={data.restaurants}
          onChange={(e) =>{onChandeData(e)}}
          required
        /> */}

    
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

export default CollectorSiginin;
