import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Home from './Component/Home';
import Add from "./Component/Add/Add"
import {Editstudents} from "./Component/Edit/Edit"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Component/MainDashboard/Main';

function App() {
  return <>
    <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home/>}>
  
          <Route index element={<Dashboard />} />
          <Route path="addstudents" element={<Add/>} />
          <Route path="/dashboard" element={<Main/>} />
          <Route path="student/edit/:id" element={<Editstudents/>} />
  </Route>
        </Routes>
    </BrowserRouter>
  </>
}

export default App;
