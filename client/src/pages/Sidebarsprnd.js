import React, { useEffect } from 'react'
import { Routes,Route, Outlet, Navigate, useNavigate } from 'react-router-dom'
import AddOthers from '../components/AddOthers/AddOthers'
import Sidebar from '../components/Sidebar/Sidebar'
import './styling.css'
import NewSidebar from '../components/Sidebar/NewSidebar'
import SidebarData1 from '../components/Sidebar/SidebarData1'
import AddJailor from '../components/AddOthers/AddJailor'
import Addmo from '../components/AddOthers/Addmo'
import Updateprisoner from './Updateprisoner'
import Details from '../components/Details/Details'
import Prisonerdetails from '../components/Details/Prisonerdetails'
import JailorDetails from '../components/Details/JailorDetails'
import MoDetails from '../components/Details/MoDetails'
import S_SDetails from '../components/Details/S_SDetails'

function Superintendent() {
  const navigate=useNavigate()
  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate('/')
    } 
  }, [])
  return (
    <div className='styling'>
        <NewSidebar SidebarData1={SidebarData1} user={'Superintendent !'}/>
        <Outlet/>
    </div>
  )
}

export default Superintendent