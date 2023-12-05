import React from 'react'
import "./Sidebar.css"
import { Link} from 'react-router-dom'
function Sidebar() {
  return <>
<aside id="sidebar" className="sidebar">
  <ul className="sidebar-nav" id="sidebar-nav">
   <div className='app-name'><span>S</span>tudent <span>M</span>anagement</div>
    <li className="nav-item">
    <Link  className="nav-link " to={"/dashboard"}>
        <i className="bi bi-grid" />
        <span>Dashboard</span>
      </Link>
   <Link to={"/"} className="nav-link ">
        <i className="bi bi-grid" />
        <span>List Of Students</span>
      </Link>
       <Link  className="nav-link " to={"/addstudents"}>
        <i className="bi bi-grid" />
        <span>Add Students</span>
      </Link>
    </li> </ul> 
    
</aside>
  </>
}

export default Sidebar