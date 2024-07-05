import React from 'react'
import './index.css'

const EachOption = (props) => {
    const {eachOption, selectedOption} = props 
    const applyCss = selectedOption === eachOption ? 'eachList-selected' : 'eachList'
    console.log(applyCss)
    return (
    <li className={applyCss}>
        <button className='eachBtn'>{eachOption}</button>
    </li>
  )
}

export default EachOption