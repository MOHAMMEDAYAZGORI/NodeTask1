import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StudentData from './StudentData'
import AddStudent from './AddStudent'
import EditStudent from './EditStudent'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<StudentData/>} />
        <Route path='/add' element={<AddStudent/> }/>
        <Route path='/edit/:_id' element={<EditStudent/> }/>
      
    </Routes>
  )
}

export default Routing