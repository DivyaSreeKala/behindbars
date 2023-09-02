import React, { useEffect, useState } from 'react'
import FormInput from '../FormInput/FormInput'
import './Details.css'
import Axios from 'axios'
function MoDetails() {
  
    
    const [values,setValues]=useState('')
    const [data,setData]=useState([])
    const [searchApiData,setSearchApiData]=useState([])

    const inputs=[
        {
            id:"1",
            label:"MO ID:",
            name:"moid",
            placeholder:"MO id"
        }
    ]

    useEffect(() => {
        Axios.get('http://localhost:5000/medicalofficer',{
        
      }
      ).then((response)=>{
        setData(response.data)
        
        setSearchApiData(response.data)
      })
      }, [])

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(values)
        
      }
     const onChange=(e)=>{
      console.log(e.target.name)
      console.log(e.target.value)
      setValues(e.target.value)//the value typing on input box is saves on to target.name ie username,phno,email etc in the state itself
      //[e.target.name] is a dynamic representation to get each elements from the state object 
      console.log(values)
    }
    const onButtonClick=(e)=>{
        e.preventDefault()
        console.log(values)
        const filterResult=searchApiData.filter(item=>item.m_id.includes(values))
        //console.log(filterResult)
        setData(filterResult)
       
       }
  return (
    

<div className='addingothers'>
        <div className='boxinside'>
            <div>
                <h1 className='title1'>Medical Officer Details</h1>
            </div>
            <div>
                <div className='innerbox'>
                <form className='formforadd' action="" onSubmit={handleSubmit}> 
                    
                 <div className='searching' >
                    
                    <FormInput value={values} key={inputs[0].id} type={'text'} 
                    label={inputs[0].label} name={inputs[0].name} placeholder={inputs[0].placeholder} 
                    onChange={onChange} />
                    
                    <button  className='register search' onClick={onButtonClick} >Search</button>
                    </div>
                        <div>

                        <div className='tablebox' >   
                <table className='styled-table'>
                    <thead>
                        <tr>
                            
                            <th>MO-ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Phone no</th>
                            <th>Email</th>
                            
                            <th>State</th>
                            <th>DOJ</th> 
                        
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((input,key)=>{
                         return   <tr>
                                <td>{input.m_id}</td>
                                <td>{input.name}</td>
                                
                                <td>{input.gender}</td>
                                <td>{input.age}</td>
                                <td>{input.ph_no}</td>
                                <td>{input.email}</td>
                                <td>{input.state}</td>
                                <td>{input.doj}</td>
                            </tr>

                        })}
                    </tbody>
                </table>
    </div>
                        </div>
                 </form>



                 </div>
            
               
    </div>
    </div>
    </div>




  )
}

export default MoDetails