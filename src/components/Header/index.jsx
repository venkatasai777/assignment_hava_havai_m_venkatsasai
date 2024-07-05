import React from 'react'
import './index.css'

const Header = () => {
  return (
    <div className='headerContainer'>
        <button className='logoBtn'>
            <img 
            src="https://res.cloudinary.com/ds86ihfbl/image/upload/v1720102701/logo_keuaec.png"
            className='logoImage'
            />
        </button>
        <div className='profileContainer'> 
            <img 
              src='https://res.cloudinary.com/ds86ihfbl/image/upload/v1720102701/haha_havai_profile_hjczyf.png'
              className='profileImage'
            />
        </div>
    </div>
  )
}

export default Header