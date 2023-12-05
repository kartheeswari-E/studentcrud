import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Home from './Component/Home';
import Add from "./Component/Add/Add"
import {Editstudents} from "./Component/Edit/Edit"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <>
    <BrowserRouter>
        <Routes>

          <Route path="/dashboard" element={<Home/>}>
  
          <Route index element={<Dashboard />} />
          <Route path="addstudents" element={<Add/>} />
          <Route path="student/edit/:id" element={<Editstudents/>} />
  </Route>
        </Routes>
    </BrowserRouter>
  </>
}

export default App;
