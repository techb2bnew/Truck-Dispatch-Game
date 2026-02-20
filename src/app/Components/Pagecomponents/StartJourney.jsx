import React from 'react'

const StartJourney = ({setCurrentcontinew}) => {

  setTimeout(() => {
     setCurrentcontinew('User_Profile')
  }, 3000);
  return (
    <div className='h-[65vh] flex justify-center items-center'>
       <div className='text-center'>
         <h3 className='text-[80px] leading-[60px] text-white'>
            let's start
         </h3>
         <h2 className='text-[150px] leading-[150px] uppercase family-primary text-primary pt-4'>
            the journey
         </h2>
       </div>
    </div>
  )
}

export default StartJourney
