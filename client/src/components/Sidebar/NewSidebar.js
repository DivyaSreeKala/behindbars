import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SubMenu from './SubMenu'
function NewSidebar({SidebarData1,user}) {

  const [sidebar,setSidebar]=useState(false)

   
  


  return (
    <div className='sidebar'>
      
        <h2 className='username'>Welcome {user}</h2>
          {SidebarData1.map((val,key)=>{
            return( 
               <div className='sidebarlist'  >
              
               <SubMenu item={val} key={key} />
              </div>
           
          
        )
    })}
</div>
  )
}

export default NewSidebar