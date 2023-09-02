
import React,{ useState } from 'react';
import './App.css';
import Actors from './components/Actors/Actors';
import BackDiv from './components/Actors/back-div';
import AddOthers from './components/AddOthers/AddOthers';
import BackImg from './components/BackImg/BackImg';
import Heading from './components/Heading/Heading'
import Login from './components/Login/Login';
import Register_sprnd from './components/Register/Register_sprnd';
import Registerig from './components/Register/Registerig';
import Sidebar from './components/Sidebar/Sidebar';
import Sidebarig from './pages/Sidebarig'
import Sidebarjailor from './pages/Sidebarjailor';
import Loginig from './pages/Loginig';
import Sidebarsprnd from './pages/Sidebarsprnd';
import Users from './pages/Users';
import Loginmo from './pages/Loginmo';
import { Routes,Route, Link } from 'react-router-dom';
import Loginjailor from './pages/Loginjailor'
import Loginsprnd from './pages/Loginsprnd'
import Addmo from './components/AddOthers/Addmo';
import AddJailor from './components/AddOthers/AddJailor';
import Sidebarmo from './pages/Sidebarmo'

import Healthhistory from './pages/Healthhistory';
import NewSidebar from './components/Sidebar/NewSidebar';
import AddS_S from './components/AddOthers/AddS_S';
import Addhealth from './pages/Addhealth';
import Axios from 'axios'
import Prisonerdetails from './components/Details/Prisonerdetails';
import SprndDetails from './components/Details/SprndDetails';
import MoDetails from './components/Details/MoDetails';
import S_SDetails from './components/Details/S_SDetails';
import Updateprisoner from './pages/Updateprisoner';
import JailorDetails from './components/Details/JailorDetails';
import HealthDetails from './components/Details/HealthDetails';
import VisitorDetails from './components/Details/VisitorDetails';
import MalpracticeDetails from './components/Details/MalpracticeDetails';
import AddVisitor from './components/AddOthers/AddVisitor';
import AddMalpractice from './components/AddOthers/AddMalpractice';
function App() {

 let isTrue=5;
  return (
    <div >

     
    
      {isTrue==0 ? <Sidebarig/> : isTrue==1 ? <Sidebarsprnd/> 
      : isTrue==2 ? <Sidebarjailor/> 
    : isTrue==3 ? <Sidebarmo/> : 
     <div>
     <Routes>
       <Route exact path="/" element={<Users/>} />
       <Route path="/ig-login" element={<Loginig/>} />
       <Route path="/superintendent-login" element={<Loginsprnd/>} />
       <Route path="/jailor-login" element={<Loginjailor/>} />
       <Route path="/mo-login" element={<Loginmo/>} />

       <Route path="/ig-registration" element={<Registerig/>} />
       <Route path="/superintendent-registration" element={<Register_sprnd/>} />
      
     
        <Route path='/ig' element={<Sidebarig/>} >
            <Route path='prisoner-details' element={<Prisonerdetails/>}/>
            <Route path='superintendent-details' exact element={<SprndDetails/>}/>
            <Route path='mo-details' exact element={<MoDetails/>}/>
            <Route path='ss-details' exact element={<S_SDetails/>}/>
          </Route>
        <Route path="/superintendent" element={<Sidebarsprnd/>} >
            <Route path='add-prisoner' element={<AddOthers/>}/>
            <Route path='update-prisoner' exact element={<Updateprisoner/>}/>
            <Route path='prisoner-details' exact element={<Prisonerdetails/>}/>
            <Route path='add-jailor' exact element={<AddJailor/>}/>
            <Route path='jailor-details' exact element={<JailorDetails/>}/>
            <Route path='add-mo' exact element={<Addmo/>}/>
            <Route path='mo-details' exact element={<MoDetails/>}/>
            <Route path='s&s' exact element={<S_SDetails/>}/>
            <Route path='visitor' element={<VisitorDetails/>}/>
          </Route>
        <Route path="/mo" element={<Sidebarmo/>} >
        <Route path='add-health' exact element={<Addhealth/>}/>
            <Route path='health-history' exact element={<HealthDetails/>}/>
        </Route>
        <Route path='/jailor' exact element={<Sidebarjailor/>} >
        <Route path='prisoner-details' element={<Prisonerdetails/>}/>
            <Route path='s&s-add' element={<AddS_S/>}/>
            <Route path='s&s-view' element={<S_SDetails/>}/>
            <Route path='add-visitor' element={<AddVisitor/>}/>
            <Route path='view-visitor' element={<VisitorDetails/>}/>
            <Route path='add-malpractices' element={<AddMalpractice/>}/>
            <Route path='view-malpractices' element={<MalpracticeDetails/>}/>

        </Route>
      </Routes>
      </div>
}

      

       
    
         </div>
  );
}

export default App;
