import React, { useEffect, useState } from 'react'
import './Details.css'
import FormInput from '../FormInput/FormInput'
import Axios from 'axios'

function S_SDetails() {
    const [values,setValues]=useState({
        pd_id:"",
        ssdate:""
    })
    const [data,setData]=useState([])
    const [searchApiData,setSearchApiData]=useState([])

    const inputs=[
        {
            id:"1",
            label:"PD ID:",
            name:"pd_id",
            placeholder:"product id"
        },
        //for adding delete option
        {
            id:"2",
            label:"Date",
            name:"ssdate",
            placeholder:"Date"
        }
    ]

    useEffect(() => {
        Axios.get('http://localhost:5000/sales_services',{
        
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
      //setValues(e.target.value)//the value typing on input box is saved on to target.name ie username,phno,email etc in the state itself
      //[e.target.name] is a dynamic representation to get each elements from the state object 
      console.log(values)
    }
    const onButtonClick=(e)=>{
        e.preventDefault()
        console.log(values)

        const filterResult=searchApiData.filter(item=>item.pd_id.includes(values.pd_id))
        //console.log(filterResult)
        setData(filterResult)
       }

    const onDelete=(e)=>{
        e.preventDefault()

        Axios.delete('http://localhost:5000/sales_services',{
            SSDate:values['ssdate'],
            
          }//,{headers:{
           // 'Content-Type':'application/json'} }
          ).then((response)=>{
            console.log(response)
      
          })
    }
    
       
  return (
    

<div className='addingothers'>
        <div className='boxinside'>
            <div>
                <h1 className='title1'>Sales and Services Details</h1>
            </div>
            <div>
                <div className='innerbox'>
                <form className='formforadd' action="" onSubmit={handleSubmit}> 
                    
                 <div className='searching' >
                    
                    <FormInput value={values[inputs.name]} key={inputs[0].id} type={'text'} 
                    label={inputs[0].label} name={inputs[0].name} placeholder={inputs[0].placeholder} 
                    onChange={onChange} />
                    
                    <button  className='register search' style={{marginRight:'20px'}} onClick={onButtonClick} >Search</button>
                    

                    </div>
                        <div>
                        
                        <div className='tablebox' >   
                <table className='styled-table'>
                    <thead>
                        <tr>
                           
                            <th>Product-ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Rate</th>
                            <th>Quantity</th>
                            <th>Unit Name</th>
                            <th>SSDate</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((input,key)=>{
                       return <tr>
                           
                            <td>{input.pd_id}</td>
                            <td>{input.p_name}</td>
                            <td>{input.description}</td>
                            <td>{input.p_rate}</td>
                            <td>{input.qty_produced}</td>
                            <td>{input.unit_name}</td>
                            <td>{input.ssdate}</td>
                            
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

export default S_SDetails