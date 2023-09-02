import React, { useEffect } from 'react'
import {Routes,Route, Outlet, useNavigate} from 'react-router-dom'
import AddOthers from '../components/AddOthers/AddOthers'
import Sidebar from '../components/Sidebar/Sidebar'
import Addhealth from './Addhealth'
import NewSidebar from '../components/Sidebar/NewSidebar'
import Healthhistory from './Healthhistory'
import HealthDetails from '../components/Details/HealthDetails'
function MedOfficer() {
    const navigate=useNavigate() 
  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate('/')
    } 
  }, [])
    const SidebarData1 = [
        {
            title:"Add Health Details",
            path:"/mo/add-health"
        },
        {
            title:"Health History",
            path:"/mo/health-history"
        },
        {
            title:"Logout",
            path:"/"
        }
    ]
   
  return (
    <div className='styling'>
        <NewSidebar SidebarData1={SidebarData1} user={'Medical Officer'}/>
        <Outlet/>
        
    </div>
  )
}

export default MedOfficer