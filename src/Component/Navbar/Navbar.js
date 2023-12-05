import React from 'react'
import "./Navbar.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Navbar() {
  return<>
  <div className='navbar-container'>
    <div className='logo-name'>
      <span className='ic-profile'><AccountCircleIcon/></span>
      <h5>Kartheeswari</h5>
    </div>

  </div>
  </>
}

export default Navbar