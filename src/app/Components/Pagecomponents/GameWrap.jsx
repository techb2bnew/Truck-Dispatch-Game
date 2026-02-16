'use client'
import React, { useState } from 'react'
import LandingPage from './LandingPage'
import StartGame from './StartGame'

const GameWrap = () => {
  const [currentComponent, setCurrentComponent] = useState('Home')
  return (
    <div>
      {
        currentComponent === 'Home' &&  <LandingPage onclick={()=>setCurrentComponent('Startgame')} /> 
        ||
        currentComponent === 'Startgame' && <StartGame setCurrentComponent={setCurrentComponent}  />
      } 
    </div>
  )
}

export default GameWrap
