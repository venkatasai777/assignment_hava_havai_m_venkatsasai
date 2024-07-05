import React, { useState } from 'react'
import './index.css'
import '../../Home/index.css'
import Navbar from '../../Navbar'
import Header from '../../Header'
import EachAirport from '../../Services/EachAirport'
import '../EachAirport/index.css'


const airportsData = [
    {
        id: 100,
        name: "Indra Gandhi International Airport",
        country: "India",
        code: "DEL",
        terminals : "3"
    },
    {
        id: 101,
        name: "Dubai Airport",
        country: "UAE",
        code: "DXB",
        terminals : "5"
    },
    {
        id: 102,
        name: "Heathrow Airport",
        country: "England",
        code: "LHR",
        terminals : "6"
    },
    {
        id: 103,
        name: "Istanbul Airport",
        country: "Turkey",
        code: "IST",
        terminals : "3"
    },
    {
        id: 104,
        name: "Rajiv Gandhi InternationalAirport",
        country: "Texas",
        code: "DFW",
        terminals : "14"
    },
]


const Airports = () => {
    const [airportsList, setAirportData] = useState(airportsData);
    const onClickDelBtn = (id) => setAirportData(prevState => prevState.filter(eachOne => eachOne.id !== id))
    const allIds = airportsData.map(each => each.id)
  return (
    <div className='Aiport-section-container'>
        <Header />
        <div className='homeSectionNAvbarAndContent'>
            <Navbar />
            <div className='airportsSectionContent'>
              <div className='mainHeadingCon'>
                    <p className='mainHeading'>Airports</p>
                    <button type='button' className='addAirportBtn'>+  Add New</button>
              </div>
              <div className='allAirportsContianer'>
                
              <div className='eachListCon-noline'>
                        <div className='eachCheckBoxCon'>
                            <input type="checkbox" name="allAirports" id="allAirports" className='checkboxCss' value={allIds}/>
                            <label htmlFor="allAirports">All Airports</label>
                        </div>
                        <div className='rightSectionCon'>
                            <div className='rightSection'>
                                <label htmlFor="country">Country</label>
                            </div>
                            <div className='rightSectionEach'>
                                <label htmlFor="code">Code</label>
                            </div>
                            <div className='rightSectionEach'>
                                <label htmlFor="terminals">Terminals</label>
                            </div>
                            <div className='rightSectionEach'>
                                <label htmlFor="terminals"></label>
                            </div>
                            <div className='rightSectionEach'>
                                <label htmlFor="terminals"></label>
                            </div>
                        </div>
                    </div>
                <ul className='airportsList'>
                    {
                        airportsList.map(each => <EachAirport key={each.id} each={each} onClickDelBtn={onClickDelBtn} />) 
                    }
                </ul>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Airports