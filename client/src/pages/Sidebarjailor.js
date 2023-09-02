import React, { useEffect } from 'react'
import { Routes,Route, Outlet, useNavigate } from 'react-router-dom'
import './styling.css'
import AddOthers from '../components/AddOthers/AddOthers'
import Sidebar from '../components/Sidebar/Sidebar'
import AddJailor from '../components/AddOthers/AddJailor'
import { SidebarDataj } from '../components/Sidebar/SidebarDataj'
import NewSidebar from '../components/Sidebar/NewSidebar'
import AddS_S from '../components/AddOthers/AddS_S'
import S_SDetails from '../components/Details/S_SDetails'
import JailorDetails from '../components/Details/JailorDetails'
import Prisonerdetails from '../components/Details/Prisonerdetails'

function Jailor() {
  const navigate=useNavigate() 
  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate('/')
    } 
  }, [])
  return (
    <div className='styling'>
       <NewSidebar SidebarData1={SidebarDataj} user={"Jailor"} /> 
       <Outlet/>

    </div>
  )
}

export default Jailor