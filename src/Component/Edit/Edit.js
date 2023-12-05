import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box'
import {useEffect,useState}from 'react';
 import { useParams } from "react-router-dom"
 import { useFormik } from 'formik';
export function Editstudents() {
    const {id}=useParams();
  const [data, setdata] = useState(null);
    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}/get/${id}`)
        .then((data) => data.json())
        .then((stu) => setdata(stu));
    }, [id]);
    return data ? <Edit data={data}/> : "loading";
    }



 export function Edit({data}) {

    const { handleSubmit, values, handleChange, touched, handleBlur, errors } = useFormik({
        initialValues: {
            name:data.name,
            card:data.card,
            gender: data.gender,
            attendance:data.attendance,
            class:data.class,
        },
        onSubmit: (newstuList) => {
            console.log('onSubmit', newstuList)
            addStudent(newstuList)
        }
    })
   
    const navigate = useNavigate()

    const addStudent = (newstuList) => {
        fetch(`${process.env.REACT_APP_API_URL}/${data._id}`, {
            method: "PUT",
            body: JSON.stringify(newstuList),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(() => navigate('/dashboard'))
            .catch((n) => console.log('error occurred' + n))
    };
  return <>
  <div className='heading'><span>E</span>dit Students</div>
   <Box onSubmit={handleSubmit} className="add-student-form" component="form"  >
            <TextField
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.name && errors.name}
                helperText={touched.name && errors.name ? errors.name : null}
                label="Name" variant="outlined" />

<TextField
                name="class"
                value={values.class}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.class && errors.class}
                helperText={touched.class && errors.class ? errors.class : null}
                label="class" variant="outlined" />


            <TextField
                name="gender"
                value={values.gender}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.gender && errors.gender}
                helperText={touched.gender && errors.gender ? errors.gender : null}
                label="gender" variant="outlined" />

            <TextField
                name="attendance"
                value={values.attendance}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.attendance && errors.attendance}
                helperText={touched.attendance && errors.attendance ? errors.attendance : null}
                label="attendance" variant="outlined" />

            <TextField
                name="card"
                value={values.card}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.card && errors.card}
                helperText={touched.card && errors.card ? errors.card : null}
                label="card" variant="outlined" />
          
            <Button type="Submit" variant="contained">Edit Student</Button>
        </Box>
  </>
}
