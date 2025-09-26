import { HeaderMenu } from './components/HeaderMenu/HeaderMenu'
import { Routes, Route } from 'react-router-dom'
import { Inicio } from './routes/Inicio'
import { Organigrama } from './routes/Organigrama'
import { useState } from 'react'
import { AcercaDe } from './routes/AcercaDe'

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
                    <Route path='fof-group-web/' element={<Inicio></Inicio>}></Route>
                    <Route path='fof-group-web/acerca de' element={<AcercaDe></AcercaDe>}></Route>
                    <Route path='fof-group-web/organigrama' element={<Organigrama></Organigrama>}></Route>
                </Routes>
            </main>
        </>
    )
}