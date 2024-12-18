import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Landing from './pages/Landing/Landing'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
