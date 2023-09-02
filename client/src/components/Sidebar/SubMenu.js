import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Sidebar.css'

function SubNav({item}) {

  const [subnav,setSubnav]=useState(false)

  const showSubnav=()=>{
    setSubnav(!subnav)
    if(item.title==='Logout'){
      ///////??api
      
      console.log('removed')
      window.localStorage.clear()

    }else{
      console.log('not removed')
    }
  }

  const onChangeid=()=>{
    let a
    window.location.pathname==item.path ? a="active": a=""
    if(item.title=='Logout'){
      console.log('removed')
      window.localStorage.clear()
    }else{
      console.log('not removed')
    }
    return a
   }

  return (
    <div className='sidebarlist'>
        
              
              <Link className='row1' to={item.path} onClick={item.subnav && showSubnav }>
              <div id='title' onClick={onChangeid}>{item.title=='Logout' ? <button className='logout'>{item.title}</button>:item.title}</div>
              
              <div className='openclose'>
                {item.subnav && subnav ?
                  item.iconopened : 
                  item.subnav ? item.iconclosed :
                  ""  
            }
              </div>
    </Link>
    {subnav && item.subnav.map((item,index)=>{
      return(
      <Link className='submenu' to={item.path} key={index} >
      {item.title}
      </Link>
    )})}
</div>


  
  )
}

export default SubNav