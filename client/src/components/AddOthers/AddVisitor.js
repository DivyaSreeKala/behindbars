import React from 'react'
import { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import Axios from 'axios'
function AddVisitor() {

    const [values,setValues]=useState({
        v_id:"",
        p_id:"", 
        name:"",
        gender:"",
        phno:"",
        vdate:"",
        timein:"",
        relationship:""
      })
      const inputs=[
        {
          id:1,
          name:"v_id",
          type:"text",
          placeholder:"Enter ID",
          required:true,
          errorMessage:"Enter valid data",
          label:"Visitor ID"
          
        },
        {
            id:2,
            name:"p_id",
            type:"text",
            placeholder:"Enter ID",
            required:true,
            errorMessage:"Enter valid data",
            label:"Prisoner ID"
            
          },
        {
          id:3,
          name:"name",
          type:"text",
          placeholder:"Enter Visitor Name",
          required:true,
          errorMessage:"Enter valid data",
          label:"Visitor Name"
          
        },
        {
            id:4,
            name:"gender",
            type:"radio",
            placeholder:"Enter gender",
           
            label:"gender"
            
          },
        
          {
            id:5,
            name:"phno",
            type:"number",
            placeholder:"Enter phno",
            required:true,
            errorMessage:"Enter valid data",
            label:"Phno"
            
          },
          {
            id:6,
            name:"vdate",
            type:"date",
            placeholder:"Enter date",
            required:true,
            errorMessage:"Enter valid data",
            label:"visit date"
            
          },
          {
            id:7,
            name:"timein",
            type:"time",
            placeholder:"Enter time in",
            required:true,
            errorMessage:"Enter valid data",
            label:"time in"
            
          },
          {
            id:8,
            name:"relationship",
            type:"text",
            placeholder:"Enter relationship",
            required:true,
            errorMessage:"Enter valid data",
            label:"relationship"
          }
         ]
    
      const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(values)

        Axios.post('http://localhost:5000/visitor',{
      Vid:values['v_id'],
      Pid:values['p_id'],
      Name:values['name'],
      Gender:values['gender'],
      Phno:values['phno'],
      Vdate:values['vdate'],
      Timein:values['timein'],
      Relationship:values['relationship']
      
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
                <h1 className='title1'>Visitor Details</h1>
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

export default AddVisitor