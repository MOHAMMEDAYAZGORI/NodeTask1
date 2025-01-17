import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [status, setStatus] = useState("")
  const navigate = useNavigate();



  const postStudent =(e) => {
    e.preventDefault();
    const student = { name, mobile, email, course, status};
    axios.post("http://localhost:4000/student",{name, mobile, email, course, status})
    .then(() => {
      alert("New Student Added Successfully..")
      navigate('/');
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <div className='container p-5'>
      <div className='col-8 col-lg-6 mx-auto shadow p-5'>
        <h1>Add Student</h1>
        <form  onSubmit={postStudent}>
          <input type='text' name='name'   className='form-control mb-3' value={name} onChange={(e)=>setName(e.target.value)}       placeholder='Enter Name'/>
          <input type='tel'  name='mobile' className='form-control mb-3' value={mobile} onChange={(e)=>setMobile(e.target.value)}   placeholder='Mobile Number'/>
          <input type='text' name='email'  className='form-control mb-3' value={email} onChange={(e)=>setEmail(e.target.value)}     placeholder='Email Address'/>
          <input type='text' name='course' className='form-control mb-3' value={course} onChange={(e)=>setCourse(e.target.value)}   placeholder='Course Name'/>
          <input type='text' name='status' className='form-control mb-3' value={status} onChange={(e)=>setStatus(e.target.value)}   placeholder='course Status'/>
          <input type='submit' />
        </form>
      </div>
      
    </div>
  )
}

export default AddStudent
