import React from 'react'
import "./Sidebar.css"
import { Link, useNavigate } from 'react-router-dom'
function Sidebar() {
    const navigate=useNavigate();
  return <>
<aside id="sidebar" className="sidebar">
  <ul className="sidebar-nav" id="sidebar-nav">
    <li className="nav-item">
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