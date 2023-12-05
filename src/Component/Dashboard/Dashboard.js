import React from 'react'
import "./Dashboard.css"
import {useState,useEffect} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Dashboard() {
  
  const navigate=useNavigate();
  const [data, setdata] = useState([]);
  useEffect(() => getarticle(), []);
  const getarticle = () => {
    fetch(`${process.env.REACT_APP_API_URL}/allstudents`)
      .then((data) => data.json())
      .then((stu) => setdata(stu.reverse()));
  };
  const deletearticle = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/delete/${id}`, {
      method: "DELETE",
    }).then(() => getarticle());
  };


  const [current, setcurrent] = useState(1);
  const records =6;
  const lastIndex = current * records;
  const firstIndex = lastIndex - records;
  const page = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / records);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function previous() {
    if (current !== 1) {
      setcurrent(current - 1);
    }
  }


  function next() {
    if (current !== npage) {
      setcurrent(current + 1);
    }
  }











  return <> 
     <div className='dashboard-container'>
      <div className='top-assign'>     <h2><span>L</span>ist Of Students</h2>
      <button onClick={()=>navigate('/addstudents')} className='add-btn'><AddIcon/> Add Students</button></div>
  
        <table id='space' className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      
      <th scope="col">Roll.no</th>
      <th scope="col">Attendance</th>
      <th scope="col">Gender</th>
      <th scope="col">Class</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  {page.map((data, i) => {
                      return (
                        <>
                          <tr className='row-data' key={i}>
      <td>{data.name}</td>
      <td>{data.card}</td>
      <td>{data.attendance}</td>
      <td>{data.gender}</td>
      <td>{data.class}</td>
      <td onClick={()=>navigate(`/student/edit/${data._id}`)}><  EditIcon  className="icon-e"/></td>
      <td onClick={() => deletearticle(data._id)}><DeleteIcon className="icon-d"/></td>
    </tr>
    </>
                      );
                    }
                    )
                  
                    }
  </tbody>
</table>

<div className="page-container">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li id="new" className="page-item">
                      <Link onClick={previous} className="page-link" to="#">
                        Previous
                      </Link>
                    </li>
                    <div className="paginations">page {current} of {numbers.length}</div>
               
                    <li className="page-item"> 
                  
                      <Link onClick={next} className="page-link" to="#">
                        Next
                      </Link>
                     
                    </li> 
                   
                  </ul>
                </nav>
                
              </div>
     </div>
  </>
}

export default Dashboard