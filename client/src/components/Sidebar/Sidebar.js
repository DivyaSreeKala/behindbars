import React from 'react'
import './Sidebar.css'
import { SidebarData } from './SidebarData'

//window.location.pathname=val.link - is to change path(url)
function Sidebar({SidebarData1,user}) {
  //const [SidebarData1,name]=props
  let v;
  return (
    <div className='sidebar'>
      
        <ul className='sidebarlist'>
       <h2 style={{color:'white'}}>Welcome {user}</h2>
        {SidebarData1.map((val,key)=>{
            return(
                <li id={window.location.pathname==val.link ? "active": ""}
                className='row' key={key} onClick={()=>{window.location.pathname=val.link}}>
                  
                    <div id='title'>{val.title}</div>
                    
               </li>
            )
        })}
        </ul>
    </div>
  )
}

export default Sidebar

