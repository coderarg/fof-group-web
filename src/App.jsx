import { useState } from 'react'
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu'
import { Routes, Route } from 'react-router-dom'
import { Inicio } from './routes/Inicio'
import { AcercaDe } from './routes/AcercaDe'
import { Organigrama } from './routes/Organigrama'
import { NotFound } from './routes/404NotFound'

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
                    <Route path='/cohercitivo' element={<NotFound />}></Route>
                    <Route path='/afiliativo' element={<NotFound />}></Route>
                    <Route path='/participativo' element={<NotFound />}></Route>
                    <Route path='/delegativo' element={<NotFound />}></Route>
                    <Route path='/liderazgo conciente' element={<NotFound />}></Route>
                    <Route path='/liderazgo transformacional' element={<NotFound />}></Route>
                    <Route path='/7 habitos' element={<NotFound />}></Route>
                    <Route path='/circulo dorado' element={<NotFound />}></Route>
                </Routes>
            </main>
        </>
    )
}