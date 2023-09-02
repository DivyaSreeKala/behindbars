import React from 'react'
import { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import Axios from 'axios'
function AddS_S() {

    const [values,setValues]=useState({
        pd_id:"", 
        productname:"",
        description:"",
        rate:"",
        quantity:"",
        unit:""
      })
      const inputs=[
        {
          id:1,
          name:"pd_id",
          type:"text",
          placeholder:"Enter ID",
          required:true,
          errorMessage:"Enter valid data",
          label:"Product ID"
          
        },
        {
          id:2,
          name:"productname",
          type:"text",
          placeholder:"Enter  Product Name",
          required:true,
          errorMessage:"Enter valid data",
          label:"Product Name"
          
        },
        {
            id:3,
            name:"description",
            type:"text",
            placeholder:"Enter description",
           
            label:"Description"
            
          },
        
          {
            id:4,
            name:"rate",
            type:"decimal(5,3)",
            placeholder:"Rate",
            required:true,
            errorMessage:"Enter valid data",
            label:"Rate"
            
          },
          {
            id:5,
            name:"quantity",
            type:"number",
            placeholder:"Enter quantity",
            required:true,
            errorMessage:"Enter valid data",
            label:"Quantity"
            
          },
          {
            id:6,
            name:"unit",
            type:"text",
            placeholder:"Enter unit name",
            required:true,
            errorMessage:"Enter valid data",
            label:"Unit Name"
 
          }
         ]
    
      const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(values)
        Axios.post('http://localhost:5000/sales_services',{
      Pd_id:values['pd_id'],
      Productname:values['productname'],
      Description:values['description'],
      Rate:values['rate'],
      Quantity:values['quantity'],
      Unit:values['unit']
      
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
                <h1 className='title1'>Sales and Service Details</h1>
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

export default AddS_S