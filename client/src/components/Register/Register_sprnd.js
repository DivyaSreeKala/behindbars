import React from 'react'
import { useState } from 'react'
import './Register.css'
import FormInput from '../FormInput/FormInput'
import Axios from 'axios'

function RegisterSprnd() {

    const [values,setValues]=useState({
        s_id:"",
        fullname:"",
        phno:"",
        email:"",
        doj:"",
        password:""
      })
    
      const inputs=[
        {
          id:1,
          name:"s_id",
          type:"text",
          placeholder:"Enter ID",
          required:true,
          errorMessage:"Enter a valid ID",
          label:"ID"
          
        },
        {
          id:2,
          name:"fullname",
          type:"text",
          placeholder:"Full Name",
          required:true,
          errorMessage:"Enter your name",
          label:"Full Name"
          
        },
        {
          id:3,
          name:"phno",
          type:"text",
          placeholder:"Contact no.",
          required:true,
          maxlength:13,
          minlength:10,
          number:true,
          errorMessage:"Enter a valid phone number",
          label:"Contact no."
          
        },
        {
         id:4,
         name:"email",
         type:"email",
         placeholder:"Enter email",
         required:true,
         errorMessage:"Enter valid email",
         label:"Email"
         
       },
       {
         id:5,
         name:"doj",
         type:"date",
         placeholder:"doj",
         required:true,
         errorMessage:"Enter valid date",
         label:"DOJ"
       },
        {
          id:6,
          name:"password",
          type:"password",
          placeholder:"Password",
          required:true,
          errorMessage:"Password should be 8-20 characters, and include atleast 1 letter, 1 number and 1 special character",
          pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          label:"Password"
          
        }
      ]
      console.log(values)
      const handleSubmit =(e)=>{
        e.preventDefault()
        
    Axios.post('http://localhost:5000/registersprnd',{
      S_id:values['s_id'],
      Username:values['fullname'],
      Ph_no:values['phno'],
      Email:values['email'],
      Doj:values['doj'],
      Password:values['password']
    }//,{headers:{
     // 'Content-Type':'application/json'} }
    ).then((response)=>{
      console.log(response)

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
        <form className='forms' action="" onSubmit={handleSubmit}>
          <h1 className='heading' >Register</h1>
          
          {inputs.map((input)=>(
            
            <FormInput key={input.id} 
            {...input} 
            value={values[input.name]}//value of thre usestates corresponding field(name from the inputs array variabe(eg,username,phoneno,email etc))
            onChange={onChange} />
            
          ))}
           
           
            <button className='register' >Register</button>
        </form>
    </div>
  )
}

export default RegisterSprnd