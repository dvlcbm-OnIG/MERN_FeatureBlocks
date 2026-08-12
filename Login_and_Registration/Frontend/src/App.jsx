import { Navigate, Route, Routes } from 'react-router-dom'


import Signup from './Signup'
import Login from './Login'
import Home from './Home'
function App() {
  

  return (
    <Routes>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>
  )
}

export default App
