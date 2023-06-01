import React from 'react'
import "./Login.css"
import { useState } from 'react'
import axios from 'axios'
import {  useNavigate  } from 'react-router-dom'

function Login(  {loginUser}) {
  const navigate = useNavigate();
  const [user ,setUser] = useState({
  
    email:"",
    password:""
   
  })

  const handleChnage = (e) =>{
    e.preventDefault();
    const {name,value} = e.target;
    setUser({
      ...user,[name]:value
    })

}
 const login =  (res) => {
  axios.post ("http://localhost:5000/login" , user )
         .then (res =>  {
          alert(res.data.message)
          loginUser( res.data.user)
          navigate("/")
          
        })
       
   

         
 }
  return (
    <div className='login'>
            {console.log(user)}
      <h1>Login Now </h1>
      <>
        <input
          name='email'
          value={user.email}
          onChange={handleChnage}
        type='text' placeholder=' Enter Your E-mail'/><br/>
        <input
          name='password'
          value={user.password}
          onChange={handleChnage}
        type='password' placeholder=' Enter Your Password'/><br/>
            <button onClick={login}>Login </button>
   
        <h3>OR</h3>
      
        <button onClick={ () =>  navigate("/register")} >Register</button>
       
      </>
    </div>
  )
}

export default Login