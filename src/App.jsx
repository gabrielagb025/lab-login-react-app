import './App.css'
import { Route, Routes } from 'react-router-dom'
import Auth from './views/auth/auth'
import Register from './views/register/register'
import Login from './views/login/login'

function App() {

  return (
    <div className="App container">
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
