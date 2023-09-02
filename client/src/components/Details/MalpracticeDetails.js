import React, { useEffect, useState } from 'react'
import './Details.css'
import FormInput from '../FormInput/FormInput'
import Axios from 'axios'
function MalpracticeDetails() {
    const [values,setValues]=useState('')
    const [data,setData]=useState([])
    const [searchApiData,setSearchApiData]=useState([])

    const inputs=[
        {
            id:"1",
            label:"P-ID:",
            name:"pid",
            placeholder:"p-id"
        },
        {
            id:"2",
            label:"MAL-ID:",
            name:"malid",
            placeholder:"mal-id"
        }
    ]

    useEffect(() => {
        Axios.get('http://localhost:5000/malpractice',{
        
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

        const filterResult=searchApiData.filter(item=>item.p_id.includes(values))
        //console.log(filterResult)
        setData(filterResult)
       }
  return (
    

<div className='addingothers'>
        <div className='boxinside'>
            <div>
                <h1 className='title1'>Malpractices Details</h1>
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
                            
                            <th>MAL-ID</th>
                            <th>P-ID</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Punishment</th>
                            
                            
                        
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((input,key)=>{

                      return   <tr>
                                <td>{input.mal_id}</td>
                                <td>{input.p_id}</td>
                                <td>{input.type}</td>
                                <td>{input.description}</td>
                                <td>{input.m_date}</td>
                                <td>{input.punishment}</td>
                            
                                
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

export default MalpracticeDetails