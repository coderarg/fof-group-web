import './App.css'
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu'
import { useState } from 'react'


export const App = () => {
    const menuItems = {
        "Inicio": [''],
        "Nosotros" : [ 'Descripción', 'Organigrama', 'Misión - Visión - Valores'],
        "Estilos": ['Estilo 1', 'Estilo 2', 'Estilo 3'],
        "Situacional": ['Situación 1', 'Situación 2']
        }

    const [activePage, setActivePage] = useState('Inicio')
    const [activeSubPage, setActiveSubPage] = useState('')

    const onGetAtivePage = (page) => {
        setActivePage(page)
        setActiveSubPage(menuItems[page][0])
    }

    const onGetAtiveSubPage = (subPage) => {
        setActiveSubPage(subPage)
    } 

    return (
    <>
        <HeaderMenu 
            getActivePage={onGetAtivePage}
            getActiveSubPage={onGetAtiveSubPage}
            activePage={activePage}
            menuItems={menuItems}
        ></HeaderMenu>
        <main>
            <h1>{ activePage }</h1>
            {activePage !== "Inicio" && <h2>{ activeSubPage }</h2>}
        </main>
    </>
    )
}