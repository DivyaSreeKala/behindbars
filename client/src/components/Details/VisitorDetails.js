import React, { useEffect, useState } from 'react'
import './Details.css'
import FormInput from '../FormInput/FormInput'
import Axios from 'axios'
function VisitorDetails() {
    const [values,setValues]=useState({
        pid:"",
        vid:""
    })
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
            label:"Visitor ID",
            name:"vid",
            placeholder:"v-id"
        }
    ]

    useEffect(() => {
        Axios.get('http://localhost:5000/visitor',{
        
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
      setValues({...values, [e.target.name] : e.target.value})
      //setValues(e.target.value)//the value typing on input box is saves on to target.name ie username,phno,email etc in the state itself
      //[e.target.name] is a dynamic representation to get each elements from the state object 
      console.log(values)
    }
    const onButtonClick=(e)=>{
        e.preventDefault()
        console.log(values)

        const filterResult=searchApiData.filter(item=>item.p_id.includes(values.pid))
        //console.log(filterResult)
        setData(filterResult)
       }
  return (
    

<div className='addingothers'>
        <div className='boxinside'>
            <div>
                <h1 className='title1'>Visitor Details</h1>
            </div>
            <div>
                <div className='innerbox'>
                <form className='formforadd' action="" onSubmit={handleSubmit}> 
                    
                 <div className='searching' >
                    
                    <FormInput value={values.pid} key={inputs[0].id} type={'text'} 
                    label={inputs[0].label} name={inputs[0].name} placeholder={inputs[0].placeholder} 
                    onChange={onChange} />
                    
                    <button  className='register search' onClick={onButtonClick} >Search</button>
                   
                    </div>
                        <div>

                        <div className='tablebox' >   
                <table className='styled-table'>
                    <thead>
                        <tr>
                            
                            <th>V-ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Ph_no</th>
                            <th>Vist Date</th>
                            <th>Time in</th>
                            <th>P-ID</th>
                            <th>Relationship</th>
                            
                        
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((input,key)=>{
                            return <tr>
                                    <td>{input.v_id}</td>
                                    <td>{input.name}</td>
                                    <td>{input.gender}</td>
                                    <td>{input.ph_no}</td>
                                    <td>{input.vdate}</td>
                                    <td>{input.time_in}</td>
                                    <td>{input.p_id}</td>
                                    <td>{input.relationship}</td>
                                    
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

export default VisitorDetails