import React from 'react'
import "./Register.css"
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Register() {
  const navigate = useNavigate();


  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    re_enter: ""
  })

  const handleChnage = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, [name]: value
    })


  }
  const register = () => {
      const { name, email, password, re_enter } = user
  if( name && email && password && (password === re_enter)){
      axios.post("http://localhost:5000/register", user)
      .then( res => {
          alert(res.data.message)
          navigate("/login")
      })
  } else {
      alert("invlid input")
  }
  }
 



return (
  <div className='login'>
    {console.log(user)}
    <h1>Register Now </h1>
    <>
      <input
        name='name'
        value={user.name}
        onChange={handleChnage}

        type='text' placeholder=' Enter Your Name' /><br />
      <input
        name='email'
        value={user.email}
        onChange={handleChnage}
        type='text' placeholder=' Enter Your E-mail' /><br />
      <input
        name='password'
        value={user.password}
        onChange={handleChnage}
        type='password' placeholder=' Enter Your Password' /><br />
      <input
        name='re_enter'
        value={user.re_enter}
        onChange={handleChnage}

        type='password' placeholder=' Enter Your Re-enter pasword' /><br />
      <button onClick={register}>Register</button>
      <h3>OR</h3>

      <button onClick={() => navigate("/login")}>Login </button>

    </>
  </div>
)
}

export default Register