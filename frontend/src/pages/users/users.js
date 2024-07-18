import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Users = () => {
  const[users, SetUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/getUsers')  
    .then (res => SetUsers(res.data))  
    .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:4000/deleteUser/' + id)  
    .then (res => {
      console.log(res)
      window.location.reload()
    })  
    .catch(err => console.log(err))
  }

  return (
    <>
     <div className='d-flex justify-content-center vh-100 bg-primary align-items-center'>
      <div className='w-50 p-5 rounded bg-white'>
      <Link to='/create' className='btn btn-success'>Add User</Link>
        <table className='table'>
          
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => {
                return <tr>
                 <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td><Link to= {`/update/${user._id}`} className='btn btn-success'>Update</Link>  </td>
                        <td><button className='btn btn-danger'
                        onClick={(e) => handleDelete(user._id)} 
                        >Delete</button></td>
                        </tr>
              })
            }
            

          </tbody>
        </table>
      </div>

     </div>
    </>
  )
}

export default Users
