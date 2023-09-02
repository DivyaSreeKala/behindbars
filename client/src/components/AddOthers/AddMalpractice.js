import React from 'react'
import { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import Axios from 'axios'
function AddMalpractice() {

    const [values,setValues]=useState({
        mal_id:"",
        p_id:"", 
        type:"",
        description:"",
        mdate:"",
        punishment:""
      })
      const inputs=[
        {
          id:1,
          name:"mal_id",
          type:"text",
          placeholder:"Enter ID",
          required:true,
          errorMessage:"Enter valid data",
          label:"Malpractice ID"
          
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
          name:"type",
          type:"text",
          placeholder:"Enter malpractice type",
          required:true,
          errorMessage:"Enter valid data",
          label:"malpractice type"
          
        },
        {
            id:4,
            name:"description",
            type:"text",
            placeholder:"Enter description",
           
            label:"description"
            
          },
        
          
          {
            id:5,
            name:"mdate",
            type:"date",
            placeholder:"Enter date",
            required:true,
            errorMessage:"Enter valid data",
            label:"date"
            
          },
          {
            id:6,
            name:"punishment",
            type:"text",
            placeholder:"Enter punishment",
            required:true,
            errorMessage:"Enter valid data",
            label:"punishment"
          }
         ]
    
      const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(values)

        Axios.post('http://localhost:5000/malpractice',{
      Malid:values['mal_id'],
      Pid:values['p_id'],
      Type:values['type'],
      Description:values['description'],
      Mdate:values['mdate'],
      Punishment:values['punishment']
      
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
                <h1 className='title1'>Malpractice Details</h1>
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

export default AddMalpractice