import React from 'react'
import { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import './Register.css' 
//import { isFormElement } from 'react-router-dom/dist/dom'
import Axios from 'axios'
import { Navigate, Routes,route, useNavigate } from 'react-router-dom'

function Registerig() { 

  const [values,setValues]=useState({
    ig_id:"",
    username:"",
    email:"",
    phno:"",
    password:""
  })

  const inputs=[
    {
      id:1,
      name:"ig_id",
      type:"text",
      placeholder:"Enter ID",
      errorMessage:"Enter valid ID",
      required:true,
      label:"IG ID"
      
    },
    {
      id:2,
      name:"username",
      type:"text",
      placeholder:"Full Name",
      errorMessage:"Enter your full name",
      required:true,
      label:"Full Name"
      
    },
    {
      id:3,
      name:"phno",
      type:"text",
      placeholder:"Contact no.",
      errorMessage:"Enter a valid phone number ",
      required:true,
      maxlength:13,
      minlength:10,
      
      pattern:`^[0-9+s()]*$`,
      label:"Contact no."
      
    },
    {
     id:4,
     name:"email",
     type:"email",
     placeholder:"Enter email",
     errorMessage:"Enter valid Email",
     required:true,
     label:"Email"
     
   },
    {
      id:5,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Password should be 8-20 characters, and include atleast 1 letter, 1 number and 1 special character",
      required:true,
      pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      label:"Password"
      
    }
  ]

  const handleRegister=()=>{
    console.log('hiiiiiii')
    console.log(values['phno'])
    

  }
  const navigate=useNavigate()

  console.log(values)
  const handleSubmit =(e)=>{
    e.preventDefault()

    Axios.post('http://localhost:5000/registerig',{
      Ig_id:values['ig_id'],
      Username:values['username'],
      Email:values['email'],
      Ph_no:values['phno'],
      Password:values['password']
    }//,{headers:{
     // 'Content-Type':'application/json'} }
    ).then((response)=>{
      console.log(response)

      /////////////////////////////////
      if(response.data.message==='success'){
        alert("user created")
        //navigate('/ig-login')
    }else{
        
        alert('error in user creation')
       // <Sidebarig/>
    }
   
    })
    
  }
 const onChange=(e)=>{
  setValues({...values, [e.target.name] : e.target.value})//the value typing on input box is saves on to target.name ie username,phno,email etc in the state itself
  //[e.target.name] is a dynamic representation to get each elements from the state object 
 }
  return (
    <div className='inside'>
        <form className='forms' onSubmit={handleSubmit}>
          <h1 className='heading' >Register</h1>
          
          {inputs.map((input)=>(
            
            <FormInput key={input.id} 
            {...input} 
            value={values[input.name]}//value of the usestates corresponding field(name from the inputs array variabe(eg,username,phoneno,email etc))
            onChange={onChange} />
            
          ))}
           
           
            <button className='register' onClick={handleRegister} >Register</button>
        </form>
    </div>
  )
}


export default Registerig