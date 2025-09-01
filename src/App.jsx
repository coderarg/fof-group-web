import { useState } from 'react'
import './App.css'
import HeaderMenu from './components/HeaderMenu/HeaderMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <HeaderMenu></HeaderMenu>
    </>
  )
}

export default App
