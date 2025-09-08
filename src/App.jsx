import './App.css'
import HeaderMenu from './components/HeaderMenu/HeaderMenu'
import { useState } from 'react'

const App = () => {

    const [activePage, setActivePage] = useState('Inicio')
    const [activeSubPage, setActiveSubPage] = useState('')

    const menuItems = {
    "Inicio": [''],
    "Nosotros" : [ 'Descripción', 'Organigrama', 'Misión - Visión - Valores'],
    "Estilos": ['Estilo 1', 'Estilo 2', 'Estilo 3'],
    "Situacional": ['Situación 1', 'Situación 2']
    }
    return (
    <>
        <HeaderMenu menuItems={ menuItems } 
        activePage={activePage} 
        setActivePage={setActivePage} 
        activeSubPage={activeSubPage}
        setActiveSubPage={setActiveSubPage}
        />
        <main>
            <h2>{activePage}</h2>
            <h3>
                {activePage === "Inicio" ? "" : activeSubPage}
            </h3>
        </main>
    </>
    )
}

export default App  