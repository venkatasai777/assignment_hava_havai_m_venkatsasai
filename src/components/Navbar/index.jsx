import React, { useState } from 'react'
import './index.css'
import { IoMdHome } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [selected, setAsSelected] = useState('')
    
    const navigate = useNavigate()
    const updateStateAndNavigate = (selectedText) => {
        setAsSelected(selectedText)
        navigate(`/services/${selectedText}`)
    }
  return (
    <div className='navbarContainer'>
        <ul className='mainMenusList'> 
            <li className='eachMenuCss'>
               {
                selected === 'home' ?  <button className='eachMenucssBtn-selected' onClick={() => updateStateAndNavigate('home')}>
                  <IoMdHome size={30} />
                  <p className='eachMenuContentCss'>Home</p>
              </button>: 
              <button className='eachMenucssBtn' onClick={() => updateStateAndNavigate('home')}>
                    <IoMdHome size={30} />
                    <p className='eachMenuContentCss'>Home</p>
                </button> 
               } 
            </li>
            <li className='eachMenuCss'>
               {
                selected === 'dashboard' ?  <button className='eachMenucssBtn-selected' onClick={() => updateStateAndNavigate('dashboard')}>
                  <TbGridDots size={30} />
                  <p className='eachMenuContentCss'>Dashboard</p>
              </button>: 
              <button className='eachMenucssBtn' onClick={() => updateStateAndNavigate('dashboard')}>
                    <TbGridDots size={30} />
                    <p className='eachMenuContentCss'>Dashboard</p>
                </button> 
               } 
            </li>
            
        </ul>
        <h2 className='listHead'>Services</h2>
        <ul className='mainMenusList'> 
            <li className='eachMenuCss'>
               {
                selected === 'airport' ?  <button className='eachMenucssBtn-selected' onClick={() => updateStateAndNavigate('airport')}>
                  
                  <p className='eachMenuContentCss'>Airports</p>
              </button>: 
              <button className='eachMenucssBtn' onClick={() => updateStateAndNavigate('airport')}>
                   
                    <p className='eachMenuContentCss'>Airports</p>
                </button> 
               } 
            </li>
            <li className='eachMenuCss'>
               {
                selected === 'videos' ?  <button className='eachMenucssBtn-selected' onClick={() => updateStateAndNavigate('videos')}>
                
                  <p className='eachMenuContentCss'>Videos</p>
              </button>: 
              <button className='eachMenucssBtn' onClick={() => updateStateAndNavigate('videos')}>
                   
                    <p className='eachMenuContentCss'>Videos</p>
                </button> 
               } 
            </li>
        </ul>
        <h2 className='listHead'>Others</h2>
        <ul className='mainMenusList'> 
            <li className='eachMenuCss'>
               {
                selected === 'list1' ?  <button className='eachMenucssBtn-selected' onClick={() => updateStateAndNavigate('list1')}>
                  
                  <p className='eachMenuContentCss'>List 1</p>
              </button>: 
              <button className='eachMenucssBtn' onClick={() => updateStateAndNavigate('list1')}>
                   
                    <p className='eachMenuContentCss'>List 1</p>
                </button> 
               } 
            </li>
            <li className='eachMenuCss'>
               {
                selected === 'list2' ?  <button className='eachMenucssBtn-selected' onClick={() => updateStateAndNavigate('list2')}>
                
                  <p className='eachMenuContentCss'>List 2</p>
              </button>: 
              <button className='eachMenucssBtn' onClick={() => updateStateAndNavigate('list2')}>
                   
                    <p className='eachMenuContentCss'>List 2</p>
                </button> 
               } 
            </li>
            <li className='eachMenuCss'>
               {
                selected === 'list3' ?  <button className='eachMenucssBtn-selected' onClick={() => updateStateAndNavigate('list3')}>
                
                  <p className='eachMenuContentCss'>List 3</p>
              </button>: 
              <button className='eachMenucssBtn' onClick={() => updateStateAndNavigate('list3')}>
                   
                    <p className='eachMenuContentCss'>List 3</p>
                </button> 
               } 
            </li>
            <li className='eachMenuCss'>
               {
                selected === 'list4' ?  <button className='eachMenucssBtn-selected' onClick={() => updateStateAndNavigate('list4')}>
                
                  <p className='eachMenuContentCss'>List 4</p>
              </button>: 
              <button className='eachMenucssBtn' onClick={() => updateStateAndNavigate('list4')}>
                   
                    <p className='eachMenuContentCss'>List 4</p>
                </button> 
               } 
            </li>
            
        </ul>
    </div>
  )
}

export default Navbar