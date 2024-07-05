import React from 'react'
import './index.css'
import { HiDotsHorizontal } from "react-icons/hi";

const EachTerminal = () => {
  return (
    <li className='eachTerminalCon'>
        <div className='leftCon'>
            <img src='https://res.cloudinary.com/ds86ihfbl/image/upload/v1720102702/terminal_Image_grhkxz.png' alt="terminal" className='terminalImage' />
        </div>
        <div className='terminalDetailsCon'>
            <p className='terminalHead'>Terminal 1</p>
            <p className='terminalContent'>optional metadata should be two lines</p>
        </div>
        <div className='rightcon'>
            <HiDotsHorizontal size={20}/>
        </div>
    </li>
  )
}

export default EachTerminal