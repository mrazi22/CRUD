import React , { useState, useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

const Update = () => {
  const {id} = useParams();

  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [age,setAge] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:4000/updateUser/' + id)  
    .then (result =>{console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
      
    })  
    .catch(err => console.log(err))
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put('http://localhost:4000/changeUser/' + id, {name,email,age})
    .then(result =>{
      console.log(result)
      navigate('/')
    } )
    .catch(err => console.log(err))
  }

  return (
    <>
    <div className='d-flex justify-content-center vh-100 bg-primary align-items-center'>
      <div className='w-50 p-5 rounded bg-white'>
        <form onSubmit={handleSubmit} >
          <h2>UPDATE USERS</h2> 

          <div className="mb-3">
            <lable htmlFor="">Name</lable>
            <input type="text" placeholder="Enter Your Name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />

          </div>
          <div className="mb-3">
            <lable htmlFor="">Email</lable>
            <input type="email" placeholder="Enter Your Email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            
          </div>
          <div className="mb-3">
            <lable htmlFor="">Age</lable>
            <input  type="text" placeholder="Enter Your Age" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
            
          </div>

          <button className='btn btn-success'>Submit</button>

        </form>

      </div>
    </div>
    </>
  )
}

export default Update