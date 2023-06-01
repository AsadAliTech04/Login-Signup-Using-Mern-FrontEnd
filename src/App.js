
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter , Route , Routes , } from 'react-router-dom';
import { useState } from 'react';
import {React} from "react"
function App() {
    const [ user , loginUser] = useState({})
  return (
    <div className='body' >
      <BrowserRouter>
      <Routes>

        {/* <Route  path='/'   > */}
        {
              user && user._id ?  (<Route path='/' element={  <Homepage loginUser={loginUser}/> }/>)  :   (<Route element={ <Login loginUser={loginUser} />}/>)    
        } 
        {/* </Route> */}
        <Route path='/' element={<Login   loginUser={loginUser} />}/>
        <Route path='/login' element={<Login   loginUser={loginUser} />}/>
        <Route path='/register' element={ <Register/> }/>
      </Routes>
      </BrowserRouter>  
         
   
    </div>
  );
}

export default App;
