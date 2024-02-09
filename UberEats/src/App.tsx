import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Navbar from "./components/navbar"
import Home from "./pages/home"
import Loginsignup from './pages/loginsignup'


function App() {

  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Loginsignup/>}/>
        <Route path='/signup' element={<Loginsignup/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
