import React from 'react'
import Users from './pages/users/users.js'
import CreateUsers from './pages/createUsers/createUsers.js'
import Update from './pages/updateUsers/update.js'
import ErrorCode from './pages/error/errorCode.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/create' element={<CreateUsers />} />
          <Route path='/update/:id' element={<Update />} />
          <Route path='*' element={<ErrorCode />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App