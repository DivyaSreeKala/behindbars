import React from 'react'
import './BackImg.css'
import '../Actors/Actors.css'
import Actors from '../Actors/Actors'
import Heading from '../Heading/Heading'
import BackDiv from '../Actors/back-div'

function BackImg() {
  return (
    <div className='outer-box'>
      <Heading/> 
      <Actors name={'IG Prisons'}/>
   <Actors name={'Superintendent'}/>
    <Actors name={'Jailor'}/>
    <Actors name={'Medical Officer'}/>
    
    </div>

  )
}

export default BackImg