import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import NaricesFrias from './components/NaricesFrias'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/NaricesFrias' element={<NaricesFrias />} />
      </Routes>
    </>
  )
}

export default App
