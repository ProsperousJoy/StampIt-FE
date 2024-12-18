import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Landing from './pages/Landing/Landing'
import Register from './pages/Register/Register'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
