import { useState } from 'react'
import './App.css'
import HeaderMenu from './components/HeaderMenu/HeaderMenu'

function App() {
  const [activePage, setActivePage] = useState('Inicio')

  return (
    <>
        <HeaderMenu
          activePage={activePage}
          setActivePage={setActivePage}
        />
        <main>
            <h2>{activePage}</h2>
        </main>
    </>
  )
}

export default App
