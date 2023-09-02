import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { Route,Routes,Outlet, Navigate ,useNavigate} from 'react-router-dom'
import AddOthers from '../components/AddOthers/AddOthers'
import AddJailor from '../components/AddOthers/AddJailor'
import NewSidebar from '../components/Sidebar/NewSidebar'
import Prisonerdetails from '../components/Details/Prisonerdetails'
import SprndDetails from '../components/Details/SprndDetails'
import MoDetails from '../components/Details/MoDetails'
import S_SDetails from '../components/Details/S_SDetails'
//import { SidebarData1 } from '../components/Sidebar/SidebarData1'

function IGPrisons() {
  const navigate=useNavigate()
  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate('/')
    } 
  }, [])
  

     const SidebarData1 = [
        {
            title:"Prisoner Details",
            path:"/ig/prisoner-details"
        },
        {
            title:"Superintendent",
            path:"/ig/superintendent-details"
        },
         {
            title:"Medical Officer",
            path:"/ig/mo-details"
        } ,
        {
            title:"Sales and Services",
            path:"/ig/ss-details"
        },
         {
            title:"Logout",//can pass another component also(to reuse?? sidebar )
            path:"/"
        }
    ]
  return (
    <div className='styling' >
        <NewSidebar SidebarData1={SidebarData1} user={'IG'} />
        <Outlet/>
      {//  <Routes>
        //    <Route path='/ig/prisoner-details' exact element={<Prisonerdetails/>}/>
        //    <Route path='/ig/superintendent-details' exact element={<SprndDetails/>}/>
        //    <Route path='/ig/mo-details' exact element={<MoDetails/>}/>
        //    <Route path='/ig/ss-details' exact element={<S_SDetails/>}/>
       // </Routes>
      }
    
    </div>
  )
}

export default IGPrisons