// import React from 'react'
// import './Button.css'
// const Button = ({bg_color, text_color}) => {
//   return (
//     <div className='body_sadfasdf'>
//          <button className={`cus_button ${bg_color} after:${bg_color} ${text_color}`}>
//          <span>ABOUT GAME</span>
//      </button>
//     </div>
//   )
// }

// export default Button


import React from 'react'

const Button = ({bg_color, text_color, btn_name, onclick}) => {
  return (
    <div className='w-fit border-2 border-[#ffffff5a]' onClick={onclick}>
      <button className={`${bg_color} ${text_color}  uppercase px-10 pt-5 pb-3 text-[26px] m-px tracking-[5px] cursor-pointer`}>
        {btn_name}
      </button>
    </div>
  )
}

export default Button
