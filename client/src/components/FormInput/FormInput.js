import React, { useState } from 'react'
import './FormInput.css'
function FormInput(props) {
  const {label,onChange,id,errorMessage,...propobj}=props
  const [focused,setFocused]=useState(false)

  const handleFocus=(e)=>{
    setFocused(true)
  }

    return (
    
    <div className='formInput'>
      <label className='labelname'>{label}</label>
      { propobj.type==='radio' ? 
      <div className='radiobtn' >
        <input className='r1' type='radio' name="gender" checked={propobj.value==='male'} value="male" onChange={onChange}/><br/>
        <label className='labelname'>male</label>
        <input className='r1' type='radio' name="gender" checked={propobj.value==='female'} value="female" onChange={onChange}/><br/>
        <label className='labelname'>female</label>
        <input className='r1' type='radio' name="gender" checked={propobj.value==='transgender'} value="transgender" onChange={onChange}/>
        <label className='labelname'>others</label>
      </div>

       : <input className='inputfield' type={propobj.type} {...propobj} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
       }
       <span >{errorMessage}</span>

    {//label and inputbox in same line
    // <table className='table'>
    //   <tr className='row'><td className='cell1'><label className='labelname'>{label}</label></td>
    //    <td className='cell2'><input className='inputfield' {...propobj} onChange={onChange}/></td>
    //    </tr>
    //  </table>
    }
    </div>
  )
}

export default FormInput