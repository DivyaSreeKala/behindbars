import React, { useEffect, useState } from 'react'
import Axios from'axios' 
import FormInput from '../components/FormInput/FormInput'

function Updateprisoner() {
  const [value,setValue]=useState('')
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

    const [data,setData]=useState([])
    const [searchApiData,setSearchApiData]=useState([])
      const inp=[
        {
            id:1,
            name:"id",
            type:"text",
            placeholder:"Enter ID",
            label:"P-ID"
            
          }
      ]

      const inputs=[
        
        {
          id:2,
          name:"fullname",
          type:"text",
          placeholder:"Enter Name",
          label:"Full Name"
          
        },
        
          {
            id:3,
            name:"gender",
            type:"radio",
            placeholder:"gender",
            label:"Gender"
            
          },
          {
            id:4,
            name:"age",
            type:"number",
            placeholder:"Enter age",
            label:"Age"
            
          },
          {
            id:5,
            name:"dob",
            type:"date",
            placeholder:"date",
            label:"DOB"
            
          },
          {
            id:6,
            name:"datein",
            type:"date",
            placeholder:"Enter date in",
            label:"Date In"
            
          },
          {
            id:7,
            name:"dateout",
            type:"date",
            placeholder:"Enter date out",
            label:"Date Out"
            
          },
    
        {
          id:8,
          name:"house",
          type:"text",
          placeholder:"Enter house name",
          label:"House Name"
          
        },
        {
          id:9,
          name:"street",
          type:"text",
          placeholder:"Enter street name",
          label:"Street Name"
          
        },
        {
          id:10,
          name:"city",
          type:"text",
          placeholder:"Enter city",
          label:"City Name"
          
        },
        {
          id:11,
          name:"state",
          type:"text",
          placeholder:"Enter State",
          label:"State"
          
        },
        {
          id:12,
          name:"country",
          type:"text",
          placeholder:"Enter Country",
          label:"Country"
          
        },
    
          {
            id:13,
            name:"edulevel",
            type:"text",
            placeholder:"Enter edulevel",
            label:"Edu level"
            
          },
    
          {
            id:14,
            name:"offense",
            type:"text",
            placeholder:"Enter offense",
            label:"Offense"
            
          },
    
          {
            id:15,
            name:"sentance",
            type:"text",
            placeholder:"Enter sentance",
            label:"Sentance"
            
          }]
    
      const handleSubmit =(e)=>{
        e.preventDefault()
        console.log('ppoookkkl')
      }
      const onChange=(e)=>{
        setValues({...values, [e.target.name] : e.target.value})//the value typing on input box is saves on to target.name ie username,phno,email etc in the state itself
        //[e.target.name] is a dynamic representation to get each elements from the state object 
       }
      
     
       const onButtonClick=(e)=>{
        e.preventDefault()
       // console.log(inp)
        console.log('1232123')
        console.log(value)
        const id=value.id
        console.log(id)
        Axios.get(`http://localhost:5000/prisonerbyid/${id}`//,{
       // P_id:values['id']
      // params:{P_id:values['id']}
     // }
     ).then((response)=>{
        setData(response.data)
        console.log('first')
        console.log(response.data)
        values['fullname']=response.data.name
        values['gender']=response.data.gender
        values['age']=response.data.age
        console.log(response.data)
          const datePart0=response.data.dob.split('T')[0]//to extract date from date and time value.
                          //divided into two parts by T.[0] is date part [1] is time part
          values['dob']=datePart0
          const datePart1=response.data.date_in.split('T')[0]
          values['datein']=datePart1
          const datePart2=response.data.date_out.split('T')[0]
          values['dateout']=datePart2
          values['house']=response.data.house
          values['street']=response.data.street
          values['city']=response.data.city
          values['state']=response.data.state
          values['country']=response.data.country
          values['edulevel']=response.data.education
          values['offense']=response.data.offense
          values['sentance']=response.data.sentance
        
      })
      console.log(data)
      
       }
       const onUpdate =(e)=>{
        e.preventDefault()
        
        console.log(values)
        const id=value.id
        console.log(id)
        Axios.put(`http://localhost:5000/prisonerbyid/${id}`,{
        
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
       }
        ).then((response)=>{
            console.log(response.data)
        })
      }
  return (
    <div className='addingothers'>
    <div className='boxinside'>
        <div>
            <h1 className='title1'> Update Prisoner</h1>
        </div>
        <div>
            <form className='formforadd' action=""> 
            <div className='innerbox'>


              <div className='searching' >
              
                <FormInput value={value[inp.name]} key={inp.id} type={inp.type} 
                label={'Prisoner ID:'} name={'id'} placeholder={'prisoner id'} 
                onChange={(e)=>{
                  console.log(e.target.value)
                  setValue({...value, [e.target.name] : e.target.value})}} />
                
                <button  className='register search' onClick={onButtonClick} >Search</button>
              </div>

            {inputs.map((input)=>(
        
        <FormInput style={{width:'12rem'}} key={input.id} 
        {...input}
        value={values[input.name]}//value of thre usestates corresponding field(name from the inputs array variabe(eg,username,phoneno,email etc))
        onChange={onChange} />
        
      ))}
            </div>
                <button className='register' id='add' onClick={onUpdate}>Update</button>
            </form>
        </div>
    </div>
</div>
  )
}

export default Updateprisoner