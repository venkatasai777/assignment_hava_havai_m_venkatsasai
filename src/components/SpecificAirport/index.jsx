import React, { useState } from 'react'
import './index.css'
import '../../components/Home/index.css'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import EachOption from './EachOption'
import EachTerminal from './EachTerminal'
import { LuUpload } from "react-icons/lu";
import modal from './Modal'

const SpecificAirport = () => {
    const allOptions = ['Terminals', 'Transport', 'contact Details']
    const [selectedOption, setSelectedOption] = useState('Terminals')
    const [totalTerminals, setTotalTerminals] = useState(2)
    
  return (
    <div className='Aiport-section-container'>
        <Header />
        <div className='homeSectionNAvbarAndContent'>
            <Navbar />
            <div className='specificAirportContainer'>
                <h2>Indira Gandhi International Airport</h2>
                <ul className='options-container'>
                    {
                        allOptions.map(eachOption => <EachOption key={eachOption} eachOption={eachOption} selectedOption={selectedOption} />)
                    }
                </ul>
                <ul className='terminalsList'>
                    <EachTerminal key="1" />
                    <EachTerminal key="2" />
                    <li className='addMoreBtnCon'>
                        <button className='addTerminalButton' type='button' onClick={onClickAddMoreBtn}> + Add Terminal</button>
                    </li>
                </ul>
                
                <h2 className='servicesHeading'>Services</h2>
                <div className='lostAndFoundConMain'>
                    <div className='lostAndFoundCon'>
                        Lost & found
                    </div>
                    <form className='lostAndFoundSec' id='lostAndFoundSec'>
                        <div className="inputFields1">
                            <div className='firstRowInputFields'>
                                <div className='serviceNameCon'>
                                    <label className='serviceNameCon-label'>
                                        Service Name
                                    </label>
                                    <input type="text" name="servicename" id="servicename" value="Lost & Found" className='inputBoxStyling' />
                                </div>
                                <div className='serviceNameCon'>
                                    <label className='serviceNameCon-label'>
                                        category
                                    </label>
                                    <select className='inputBoxStyling' >
                                        <option value="option1" className='inputBoxStyling'  >Option1</option>
                                        <option value="option2" className='inputBoxStyling' >Option2</option>
                                        <option value="option3" className='inputBoxStyling' >Option3</option>
                                        <option value="option4" className='inputBoxStyling' >Option4</option>
                                    </select> 
                                </div>
                                <div className='serviceNameCon'>
                                    <label className='serviceNameCon-label'>
                                        Sub Category
                                    </label>
                                    <select className='inputBoxStyling' >
                                        <option value="option1" className='inputBoxStyling'  >Option1</option>
                                        <option value="option2" className='inputBoxStyling' >Option2</option>
                                        <option value="option3" className='inputBoxStyling' >Option3</option>
                                        <option value="option4" className='inputBoxStyling' >Option4</option>
                                    </select> 
                                </div>
                                <div className='imageUploadCon'>
                                    <label htmlFor='image' className='imageLabel' style={{fontWeight:900}}>
                                        <LuUpload size={20} style={{marginRight: '8px'}} />
                                        Upload Image
                                    </label>
                                    <input type="file" name="image" id="image" accept='image/*' style={{visibility: 'hidden'}}/>
                                </div>
                            </div>
                            <div className='serviceNameCon'>
                                <button type='button' className='saveBtn'>save</button>       
                            </div>
                        </div>
                        <div className='descriptionCon'>
                            <label className='serviceNameCon-label'>
                                Description
                            </label>
                            <textarea name="description" id="description" cols="30" rows="2"></textarea>
                        </div>
                    </form>
                    <div className='LoungeCss'>
                        Lounge
                    </div>
                    <div className='LoungeCss'>
                        Money Exchange
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecificAirport