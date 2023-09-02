import React, { useEffect, useState } from 'react'
import FormInput from '../FormInput/FormInput'
import './Details.css'
import Axios from 'axios'

//from sprnd_login table

function SprndDetails() {
    const [values,setValues]=useState('')
    const [user,setData]=useState([])
    const [searchApiData,setSearchApiData]=useState([])
    const inputs=[
        {
            id:"1",
            label:"Superintendent ID:",
            name:"sid",
            placeholder:"superintendent id"
        }
    ]

    useEffect(() => {
        Axios.get('http://localhost:5000/sprnd',{
        
      }//,{headers:{
       // 'Content-Type':'application/json'} }
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
        const filterResult=searchApiData.filter(item=>item.s_id.includes(values))
        setData(filterResult)
       }
  return (
  

<div className='addingothers'>
        <div className='boxinside'>
            <div>
                <h1 className='title1'>Superintendent Details</h1>
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
                            
                            <th>S-ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Joining Date</th>
                            
                            <th>Date</th>
                            <th>Login Time</th>
                            
                        
                        </tr>
                    </thead>
                    <tbody>
                       { user.map((users,index)=>{
                          return  <tr className='active-row'>
                                <td>{users.s_id}</td>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>{users.doj}</td>
                                <td>{users.sdate.split('T')[0]}</td>
                                <td>{users.login_time}</td>
                                
                                
                            </tr>

                       })  }
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

export default SprndDetails