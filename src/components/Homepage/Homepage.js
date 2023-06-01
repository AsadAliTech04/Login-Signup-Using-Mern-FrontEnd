import React from 'react'
import "./Homepage.css"


function Homepage({loginUser}) {

  return (
    <div className='homepage'>
        <h1>Homepage</h1>
    <button onClick={ () => loginUser({})}>Log Out</button>
    </div>
  )
}

export default Homepage