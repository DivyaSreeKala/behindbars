import React from 'react'
import { useState } from 'react'
import FormInput from '../components/FormInput/FormInput'
import '../components/AddOthers/AddOthers.css'
import {SelectInput1,SelectInput2} from '../components/FormInput/SelectInput'
import Axios from 'axios'
function Addhealth() {
    const [values,setValues]=useState({
        p_id:"",
        mental_health:"",
        medication_m:"",
        diseases:"",
        physical_health:"",
        medication_p:"",
        description:""
      })
    
      const inputs=[
        {
          id:1,
          name:"p_id",
          type:"text",
          placeholder:"Enter P-ID",
          required:true,
          errorMessage:"Enter valid data",
          label:"P-ID"
          
        },
        {
          id:2,
          name:"mental_health",
          type:"",
          placeholder:"mental health",
          required:true,
          errorMessage:"Enter valid data",
          label:"Mental Health Status"
          
        },
        {
          id:3,
          name:"medication_m",
          type:"",
          placeholder:"medication",
          required:true,
          errorMessage:"Enter valid data",
          label:"Under Medication"
          
        },
        {
         id:4,
         name:"diseases",
         type:"text",
         placeholder:"disease",
         required:true,
         errorMessage:"Enter valid data",
         label:"Disease"
         
       },
       {
        id:5,
        name:"physical_health",
        type:"",
        placeholder:"Physical Health",
        required:true,
        errorMessage:"Enter valid data",
        label:"Physical Health "
        
      },
      {
        id:6,
        name:"medication_p",
        type:"",
        placeholder:"Under Medication",
        required:true,
        errorMessage:"Enter valid data",
        label:"Under Medication"
      },
       {
         id:7,
         name:"description",
         type:"text",
         placeholder:"Description",
         label:"Description"
       }
      ]
      
     // console.log(values)
      const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(values)

        Axios.post('http://localhost:5000/healthdetails',{
          Pid:values['p_id'],
          Mentalhealth:values['mental_health'],
          Medication_m:values['medication_m'],
          Diseases:values['diseases'],
          Physicalhealth:values['Physical_health'],
          Medication_p:values['medication_p'],
          Description:values['description'],
          
          
        }//,{headers:{
         // 'Content-Type':'application/json'} }
        ).then((response)=>{
          console.log(response)
    
        })
        
      }
     const onChange=(e)=>{
      console.log(e.target.name)
      console.log(e.target.value)
      setValues({...values, [e.target.name] : e.target.value})//the value typing on input box is saves on to target.name ie username,phno,email etc in the state itself
      //[e.target.name] is a dynamic representation to get each elements from the state object 
      console.log(values)
    }
  return (
    <div className='addingothers'>
    <div className='boxinside'>
        <div>
            <h1 className='title1'>Add Prisoner Health Details</h1>
        </div>
        <div>
            <form className='formforadd' action="" onSubmit={handleSubmit}> 
            <div className='innerbox'>
           
        
        <FormInput style={{width:'12rem'}} 
          key={inputs[0].id} 
          {...inputs[0]} 
          value={values[inputs[0].name]}//value of thre usestates corresponding field(name from the inputs array variabe(eg,username,phoneno,email etc))
          onChange={onChange} />

        <SelectInput1
          key={inputs[1].id} 
          {...inputs[1]} 
          value={values[inputs[1].name]}//value of thre usestates corresponding field(name from the inputs array variabe(eg,username,phoneno,email etc))
          onChange={onChange}
        />

        <SelectInput2
          key={inputs[2].id} 
          {...inputs[2]} 
          value={values[inputs[2].name]}//value of thre usestates corresponding field(name from the inputs array variabe(eg,username,phoneno,email etc))
          onChange={onChange}
        />

        <FormInput style={{width:'12rem'}} 
          key={inputs[3].id} 
          {...inputs[3]} 
          value={values[inputs[3].name]}//value of thre usestates corresponding field(name from the inputs array variabe(eg,username,phoneno,email etc))
          onChange={onChange} />
      
        <SelectInput1
          key={inputs[4].id} 
          {...inputs[4]} 
          value={values[inputs[4].name]}//value of thre usestates corresponding field(name from the inputs array variabe(eg,username,phoneno,email etc))
          onChange={onChange}
        />

        <SelectInput2
          key={inputs[5].id} 
          {...inputs[5]} 
          value={values[inputs[5].name]}//value of thre usestates corresponding field(name from the inputs array variabe(eg,username,phoneno,email etc))
          onChange={onChange}
        />

       <FormInput style={{width:'12rem'}} 
          key={inputs[6].id} 
          {...inputs[6]} 
          value={values[inputs[6].name]}//value of thre usestates corresponding field(name from the inputs array variabe(eg,username,phoneno,email etc))
          onChange={onChange} />
            </div>
                <button className='register' id='add'>save</button>
            </form>
        </div>
    </div>
</div>
  )
}

export default Addhealth