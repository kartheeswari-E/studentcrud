import React from 'react'
import "./Main.css"
import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Main() {
    const [data, setdata] = useState([]);
    useEffect(() => getarticle(), []);
    const getarticle = () => {
      fetch(`${process.env.REACT_APP_API_URL}/allstudents`)
        .then((data) => data.json())
        .then((stu) => setdata(stu.reverse()));
    };
  return<>
  <div className='main-dash-container'>
  <div className='top-assign'>     <h2><span>D</span>ashboard</h2></div>
  <div  className="row">
              <div className="col-lg-3 col-6">
                <div id='box-container'className="small-box bg-success">
                  <div className="inner">
                 

                    <p>No.of Students:</p>   <h3>{data.length}</h3>
                  </div>

                  <Link
                    to="/"
                    style={{ cursor: "pointer" }}
                    className="small-box-footer"
                  >
                    More info <ArrowForwardIcon/>
                  </Link>
                </div>
              </div>
            </div>
  </div>
  </>
}

export default Main