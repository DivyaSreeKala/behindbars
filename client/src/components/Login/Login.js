import React from 'react'
import {useState} from 'react'
import FormInput from '../FormInput/FormInput'
import './Login.css'
import { Navigate, useNavigate } from 'react-router-dom'
import Axios  from 'axios'


function Login({userType}) {
  const [values,setValues]=useState({
    id:"",  
    password:""
  })
  const inputs=[
    {
      id:1,
      name:"id",
      type:"text",
      placeholder:"Enter ID",
      errorMessage:"Enter valid User ID",
      required:true,
      label:"ID"
      
    },
    {
      id:2,
      name:"password",
      type:"password",
      placeholder:"password",
      errorMessage:"Enter your password",
      required:true,
      label:"password"
      
    }]
    //for api????????
    const handleLogin=()=>{
    }

   
    //Registration
    const navigate=useNavigate()

    const handleRegister=()=>{
        if(userType==='IG'){
            navigate('/ig-registration')
        }
        else{
            navigate('/superintendent-registration')
        }
    }

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(values)

    if(userType==='IG'){
      Axios.post('http://localhost:5000/login-ig',{
      Igid:values['id'],
      Password:values['password']
    }//,{headers:{
     // 'Content-Type':'application/json'} }
    ).then((response)=>{

      if(response.data.message){
          navigate('/ig-login')
          alert(response.data.message)
      }else{
          localStorage.setItem('token',response.data.token)
          navigate('/ig')
          console.log(response.data.token)
         // <Sidebarig/>
      }

    })
    }
    else if(userType==='Superintendent'){
      Axios.post('http://localhost:5000/login-sprnd',{
        Igid:values['id'],
        Password:values['password']
      }//,{headers:{
       // 'Content-Type':'application/json'} }
      ).then((response)=>{
  
        if(response.data.message){
            navigate('/superintendent-login')
            alert(response.data.message)
        }else{
            localStorage.setItem('token',response.data.token)
            navigate('/superintendent')
            console.log(response.data.token)
           // <Sidebarig/>
        }
  
      })
    }
    else if(userType==='Jailor'){
      Axios.post('http://localhost:5000/jailorlogin',{
        Jid:values['id'],
        Password:values['password']
      }//,{headers:{
       // 'Content-Type':'application/json'} }
      ).then((response)=>{
  
        if(response.data.message){
            navigate('/jailor-login')
            alert(response.data.message)
            
        }else{
            localStorage.setItem('token',response.data.token)
            navigate('/jailor')
            console.log(response.data.token)
           // <Sidebarig/>
        }
  
      })
    }
    else{
      Axios.post('http://localhost:5000/login-mo',{
        Moid:values['id'],
        Password:values['password']
      }//,{headers:{
       // 'Content-Type':'application/json'} }
      ).then((response)=>{
  
        if(response.data.message){
            navigate('/mo-login')
            alert(response.data.message)
        }else{
            localStorage.setItem('token',response.data.token)
            navigate('/mo')
            console.log(response.data.token)
           // <Sidebarig/>
        }
  
      })
    }
  }
  const onChange=(e)=>{
    setValues({...values, [e.target.name] : e.target.value})//the value typing on input box is saves on to target.name ie username,phno,email etc in the state itself
    //[e.target.name] is a dynamic representation to get each elements from the state object 
   }
    
   console.log(values)
  return (

     <div className='inside'>
        <form className='forms' onSubmit={handleSubmit}>
          <h1 className='heading' >Login</h1>
          
          {inputs.map((input)=>(
            
            <FormInput key={input.id} 
            {...input} 
            value={values[input.name]}//value of thre usestates corresponding field(name from the inputs array variabe(eg,username,phoneno,email etc))
            onChange={onChange} />
            
          ))}
           
           
            <button className='btnin' onClick={handleLogin} >Login</button>
          
           { (userType==='IG'|| userType==='Superintendent') ? <button className='btnin' onClick={handleRegister} >Register</button>  : '' }
        </form>
    </div> 
  )

   
  
}

export default Login