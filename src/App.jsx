import { useState } from 'react'
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu'
import { Routes, Route } from 'react-router-dom'
import { Inicio } from './routes/Inicio'
import { AcercaDe } from './routes/AcercaDe'
import { Organigrama } from './routes/Organigrama'

export const App = () => {

    const [activePage, setActivePage] = useState('inicio')
    const [activeSubPage, setActiveSubPage] = useState('')

    return (
        <>
            <HeaderMenu 
                activePage={activePage} 
                activeSubPage={activeSubPage}
                setActivePage={setActivePage}
                setActiveSubPage={setActiveSubPage}
                ></HeaderMenu>
            <main>
                <Routes>
                    <Route path='/' element={<Inicio />}></Route>
                    <Route path='/acerca de' element={<AcercaDe />}></Route>
                    <Route path='/organigrama' element={<Organigrama />}></Route>
                </Routes>
            </main>
        </>
    )
}