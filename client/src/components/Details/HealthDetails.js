import React, { useEffect, useState } from 'react'
import FormInput from '../FormInput/FormInput'
import './Details.css'
import Axios from 'axios'
function HealthDetails() {
    
    const [values,setValues]=useState('')
    const [data,setData]=useState([])
    const [searchApiData,setSearchApiData]=useState([])

    const inputs=[
        {
            id:"1",
            label:"P ID:",
            name:"pid",
            placeholder:"prisoner id"
        }
    ]

    useEffect(() => {
        Axios.get('http://localhost:5000/healthdetails',{
        
      }
      ).then((response)=>{
        setData(response.data)
        console.log(response.data)
        
        console.log(data)
        setSearchApiData(response.data)
        console.log(searchApiData)
      })
      }, [])

    const handleSubmit =(e)=>{
        //e.preventDefault()
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
        
        const filterResult=searchApiData.filter(item=>item.p_id.includes(values))
       
        setData(filterResult)
       }

    const onDelete=(e)=>{
        
        const id=values
        console.log(id)
        Axios.delete(`http://localhost:5000/healthdetails/${id}`//,{
            // P_id:values['id']
           // params:{P_id:values['id']}
          // }
          ).then((response)=>{
            
             console.log('first')
             console.log(response.data)

            
           })
    }
  return (
    

<div className='addingothers'>
        <div className='boxinside'>
            <div>
                <h1 className='title1'>Health Details</h1>
            </div>
            <div>
                <form className='formforadd' action="" onSubmit={handleSubmit}> 
                <div className='innerbox'>
                    
                 <div className='searching' >
                    
                    <FormInput value={values} key={inputs[0].id} type={'text'} 
                    label={inputs[0].label} name={inputs[0].name} placeholder={inputs[0].placeholder} 
                    onChange={onChange} />
                    
                    <button  className='register search' onClick={onButtonClick} >Search</button>
                   
                    <button  className='register search' style={{backgroundColor:'#b83b25'}} onClick={onDelete}>Delete</button>
                    </div>
                        <div>

                        <div className='tablebox' >   
                <table className='styled-table'>
                    <thead>
                        <tr>
                            
                            <th>P-ID</th>
                            <th>Mental Health</th>
                            <th>Under Medication</th>
                            <th>Disease</th>
                            <th>Physical Health</th>
                            <th>Under Medication</th>
                            <th>Description</th>
                            
                        
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((input,key)=>{
                            return <tr>
                                    <td>{input.p_id}</td>
                                    <td>{input.m_health}</td>
                                    <td>{input.mmedication_sts}</td>
                                    <td>{input.disease}</td>
                                    <td>{input.p_health}</td>
                                    <td>{input.pmedication_sts}</td>
                                    <td>{input.description}</td>
                                    
                                   </tr>
                        })}
                    </tbody>
                </table>
    </div>
                        </div>
                 
                 </div>
                 </form>



            
               
    </div>
    </div>
    </div>


    
  )

}

export default HealthDetails