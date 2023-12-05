import React from 'react'
import "./Dashboard.css"
import {useState,useEffect} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
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
  return <> 
     <div className='dashboard-container'>
       <h2><span>L</span>ist Of Students</h2>
        <table id='space' className="table table-striped">
  <thead>
    <tr>
      <th scope="col">SI.NO</th>
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
  {data.map((data, i) => {
                      return (
                        <>
                          <tr key={i}>
      <th scope="row">{i+1}</th>
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
     </div>
  </>
}

export default Dashboard