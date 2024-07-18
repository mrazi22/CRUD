import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const CreateUsers = () => {
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [age,setAge] = useState()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/addUser', {name,email,age})
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
        <form onSubmit={handleSubmit}>
          <h2>ADD USERS</h2>

          <div className="mb-3">
            <lable htmlFor="">Name</lable>
            <input type="text" placeholder="Enter Your Name" className="form-control" onChange={(e) => setName(e.target.value)}  />

          </div>
          <div className="mb-3">
            <lable htmlFor="">Email</lable>
            <input type="email" placeholder="Enter Your Email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
            
          </div>
          <div className="mb-3">
            <lable htmlFor="">Age</lable>
            <input  type="text" placeholder="Enter Your Age" className="form-control"  onChange={(e) => setAge(e.target.value)} />
            
          </div>

          <button className='btn btn-success'>Submit</button>

        </form>

      </div>
    </div>
    </>
  )
}

export default CreateUsers