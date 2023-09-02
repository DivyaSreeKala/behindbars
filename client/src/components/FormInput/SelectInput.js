import React from 'react'
 export function SelectInput1(props) {
    const {label,onChange,id,...propobj}=props
  return (
    <div className='formInput'>
        <label className='labelname'>{label}</label>
        <select style={{width:'14rem'}} className='inputfield' onChange={onChange} name={propobj.name}>
          <option className='opt1' value="" >---Select---</option>
          <option className='opt1' value='poor'>Poor</option>
          <option className='opt1' value='fair'>Fair</option>
          <option className='opt1' value='good'>Good</option>
          <option className='opt1' value='excellent'>Excellent</option>
        </select>
    </div>
  )
}

export function SelectInput2(props) {
    const {label,onChange,id,...propobj}=props
  return (
    <div className='formInput'>
        <label className='labelname'>{label}</label>
        <select style={{width:'14rem'}} className='inputfield' onChange={onChange} name={propobj.name}>
        <option className='opt1' value="" >---Select---</option>
          <option className='opt1'  value='no'>No</option>
          <option className='opt1' value='yes'>Yes</option>
        </select>
    </div>
  )
} 
