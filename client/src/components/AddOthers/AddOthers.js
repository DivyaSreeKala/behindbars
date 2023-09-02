import React from 'react'
import FormInput from '../FormInput/FormInput'
import { useState } from 'react'
import './AddOthers.css'
import Axios from 'axios'

//add prisoners

function AddOthers() {
  const [responseData,setResponseData]=useState([])
    const [values,setValues]=useState({
        id:"", 
        fullname:"",
        gender:"",
        age:"",
        dob:"",
        datein:"",
        dateout:"",
        house:"",
        street:"",
        city:"",
        state:"",
        country:"",
        edulevel:"",
        offense:"",
        sentance:""
      })
      const inputs=[
        {
          id:1,
          name:"id",
          type:"text",
          placeholder:"Enter ID",
          required:true,
          errorMessage:"Enter valid ID",
          label:"P-ID"
          
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
            name:"age",
            type:"number",
            placeholder:"Enter age",
            required:true,
            errorMessage:"Enter valid age",
            label:"Age"
            
          },
          {
            id:5,
            name:"dob",
            type:"date",
            placeholder:"date",
            required:true,
            errorMessage:"Enter valid date",
            label:"DOB"
            
          },
          {
            id:6,
            name:"datein",
            type:"date",
            placeholder:"Enter date in",
            required:true,
            errorMessage:"Enter valid date",
            label:"Date In"
            
          },
          {
            id:7,
            name:"dateout",
            type:"date",
            placeholder:"Enter date out",
            required:true,
            errorMessage:"Enter valid date",
            label:"Date Out"
            
          },
    
        {
          id:8,
          name:"house",
          type:"text",
          placeholder:"Enter house name",
          required:true,
          errorMessage:"Enter valid house name",
          label:"House Name"
          
        },
        {
          id:9,
          name:"street",
          type:"text",
          placeholder:"Enter street name",
          required:true,
          errorMessage:"Enter valid street name",
          label:"Street Name"
          
        },
        {
          id:10,
          name:"city",
          type:"text",
          placeholder:"Enter city",
          required:true,
          errorMessage:"Enter valid city",
          label:"City Name"
          
        },
        {
          id:11,
          name:"state",
          type:"text",
          placeholder:"Enter State",
          required:true,
          errorMessage:"Enter valid state",
          label:"State"
          
        },
        {
          id:12,
          name:"country",
          type:"text",
          placeholder:"Enter Country",
          required:true,
          errorMessage:"Enter valid country",
          label:"Country"
          
        },
    
          {
            id:13,
            name:"edulevel",
            type:"text",
            placeholder:"Enter edulevel",
            required:true,
            errorMessage:"Enter valid data",
            label:"Edu level"
            
          },
    
          {
            id:14,
            name:"offense",
            type:"text",
            placeholder:"Enter offense",
            required:true,
            errorMessage:"Enter valid data",
            label:"Offense"
            
          },
    
          {
            id:15,
            name:"sentance",
            type:"text",
            placeholder:"Enter sentance",
            required:true,
            errorMessage:"Enter valid data",
            label:"Sentance"
            
          }]
    
      const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(values)

        Axios.post('http://localhost:5000/prisoner',{
          P_id:values['id'],
          Name:values['fullname'],
          Gender:values['gender'],
          Age:values['age'],
          Dob:values['dob'],
          Date_in:values['datein'],
          Date_out:values['dateout'],
          House:values['house'],
          Street:values['street'],
          City:values['city'],
          State:values['state'],
          Country:values['country'],
          Education:values['edulevel'],
          Offense:values['offense'],
          Sentance:values['sentance']
        }//,{headers:{
         // 'Content-Type':'application/json'} }
        ).then((response)=>{
          console.log(response)
          setResponseData(response)
          
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
                <h1 className='title1'>Prisoner Registration</h1>
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
                    <button className='register' id='add'>save</button>
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default AddOthers

