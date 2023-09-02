import React, { useState } from 'react'
import Login from '../Login/Login'
import FormInput from '../FormInput/FormInput'
import './AddOthers.css'
import Axios from 'axios'
function AddJailor() {
    const [values,setValues]=useState({
        id:"", 
        fullname:"",
        gender:"",
        age:"",
        phno:"",
        email:"",
        state:"",
        doj:"",
        password:""
      })
      const inputs=[
        {
          id:1,
          name:"id",
          type:"text",
          placeholder:"Enter ID",
          required:true,
          errorMessage:"Enter valid ID",
          label:"J-ID"
          
        },
        {
          id:2,
          name:"fullname",
          type:"text",
          placeholder:"Enter Name",
          required:true,
          errorMessage:"Enter valid name",
          label:"Full Name"
          
        },
        
          {
            id:3,
            name:"gender",
            type:"radio",
            placeholder:"gender",
            required:true,
            errorMessage:"Enter valid gender",
            label:"Gender"
            
          },
          {
            id:4,
            name:"phno",
            type:"text",
            placeholder:"Enter phone number",
            required:true,
            minlength:10,
            maxlength:13,
            number:true,
            pattern:`^[0-9-+s()]*$`,
            errorMessage:"Enter valid phone number",
            label:"Phone no."
            
          },
          {
            id:5,
            name:"email",
            type:"email",
            placeholder:"Enter email id",
            required:true,
            errorMessage:"Enter valid email",
            label:"Email ID"
            
          },

        {
          id:6,
          name:"state",
          type:"text",
          placeholder:"Enter State",
          required:true,
          errorMessage:"Enter valid state",
          label:"State"
          
        },
        {
          id:7,
          name:"doj",
          type:"date",
          placeholder:"date",
          required:true,
          errorMessage:"Enter valid date",
          label:"DOJ"
          
        },

          {
            id:8,
            name:"password",
            type:"password",
            placeholder:"Enter password",
            required:true,
            errorMessage:"Password should be 8-20 characters, and include atleast 1 letter, 1 number and 1 special character",
            pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,  
            label:"Password"
            
          }]
    
      const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(values)
       
        Axios.post('http://localhost:5000/jailor',{
      J_id:values['id'],
      Username:values['fullname'],
      Gender:values['gender'],
      Ph_no:values['phno'],
      Email:values['email'],
      State:values['state'],
      Doj:values['doj'],
      Password:values['password']
    }//,{headers:{
     // 'Content-Type':'application/json'} }
    ).then((response)=>{
      console.log(response)

    })
      }
      const onChange=(e)=>{
        setValues({...values, [e.target.name] : e.target.value})//the value typing on input box is saves on to target.name ie username,phno,email etc in the state itself
        //[e.target.name] is a dynamic representation to get each elements from the state object 
       }
     
  return (
    

    <div className='addingothers'>
        <div className='boxinside'>
            <div>
                <h1 className='title1'>Jailor Registration</h1>
            </div>
            <div>
                <form className='formforadd' action="" onSubmit={handleSubmit}> 
                <div className='innerbox'>
          {inputs.map((input)=>(
            
            <FormInput style={{width:'12rem'}} key={input.id} 
            {...input} 
            value={values[input.name]}//value of thre usestates corresponding field(name from the inputs array variabe(eg,username,phoneno,email etc))
            onChange={onChange} />
            
          ))}
           
           </div>
            <button className='register' style={{width:'8rem'}}>Register</button>
        </form>
    </div>
    </div>
    </div>
  )
}

export default AddJailor