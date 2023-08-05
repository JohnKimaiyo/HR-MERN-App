import React from 'react'
import Login from './components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Employee from './components/Employee'
import Profile from './components/Profile'
import Home from './components/Home'
import AddEmployee from './components/AddEmployee'
import EditEmployee from './components/EditEmployee'
import Start from './components/Start'
import EmployeeDetail from './components/EmployeeDetail'
import EmployeeLogin from './components/EmployeeLogin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/employee" element={<Employee />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/create" element={<AddEmployee />}></Route>
          <Route path="/employeeEdit/:id" element={<EditEmployee />}></Route>
        </Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/start" element={<Start />}></Route>
        <Route path="/employeeLogin" element={<EmployeeLogin />}></Route>
        <Route
          path="/employeedetail/:id"
          element={<EmployeeDetail />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
