import React from 'react'
import './Actors.css'
import { BrowserRouter,Link ,useNavigate,Routes,Route} from 'react-router-dom'
import Login from '../Login/Login'
function Actors(props) {
  const navigate=useNavigate()
  const btnClick=()=>{
    if(props.name==='IG Prisons'){
      navigate('/ig-login')
    }
    else if(props.name==='Superintendent'){
      navigate('/superintendent-login')
    }
    else if(props.name==='Jailor'){
      navigate('/jailor-login')
    }
    else{
      navigate('/mo-login')
    }
  }
  return (
    <div className='container'>
        <button className='buttons' onClick={btnClick} >{props.name}</button>
        
    </div>
  )
}

export default Actors