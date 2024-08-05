import {useState} from 'react'
import Listagem from './pages/Listagem'
import { Routes,Route } from 'react-router-dom'
import './App.css'

function App() {
  const App = () => {

    const [color] = useState("#0000ff")
    document.body.style.backgroundColor = color
    return (
      <Routes>
        <Route path="/" element={<Listagem />} />
      </Routes>
    )
  }
}

export default App

