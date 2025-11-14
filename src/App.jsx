import { useState } from 'react'
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu'
import { Routes, Route } from 'react-router-dom'
import { Estilos } from './routes/diapositivas/Estilos'
import { Liderazgo } from './routes/diapositivas/Liderazgo'
import { Situacional } from './routes/diapositivas/Situacional'
import { LiderazgoEfectivo } from './routes/diapositivas/LiderazgoEfectivo'
import { LiderazgoEquipo } from './routes/diapositivas/LiderazgoEquipo'
import { Inicio } from './routes/Inicio'
import { AcercaDe } from './routes/AcercaDe'
import { Organigrama } from './routes/Organigrama'
import { Explicacion } from './routes/Explicacion'
import { Coercitivo } from './routes/Coercitivo'
import { Afiliativo } from './routes/Afiliativo'
import { Participativo } from './routes/Participativo'
import { Delegativo } from './routes/Delegativo'
import { PlanificarNegociacion } from './routes/PlanificarNegociacion'
import { NotFound } from './routes/404NotFound'
import { Nosotros } from './routes/diapositivas/Nosotros'
import { LiderazgoConciente } from './routes/LiderazgoConciente'
import { LiderazgoTransformacional } from './routes/LiderazgoTransformacional'

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
                    <Route path='/nosotros' element={<Nosotros />}></Route>
                    <Route path='/acerca de' element={<AcercaDe />}></Route>
                    <Route path='/organigrama' element={<Organigrama />}></Route>
                    <Route path='/explicación' element={<Explicacion />}></Route>
                    <Route path='/estilos' element={<Estilos />}></Route>
                    <Route path='/coercitivo' element={<Coercitivo />}></Route>
                    <Route path='/afiliativo' element={<Afiliativo />}></Route>
                    <Route path='/situacional' element={<Situacional />}></Route>
                    <Route path='/participativo' element={<Participativo />}></Route>
                    <Route path='/delegativo' element={<Delegativo />}></Route>
                    <Route path='/liderazgo' element={<Liderazgo />}></Route>
                    <Route path='/liderazgo conciente' element={<LiderazgoConciente />}></Route>
                    <Route path='/liderazgo transformacional' element={<LiderazgoTransformacional />}></Route>
                    <Route path='/liderazgo efectivo' element={<LiderazgoEfectivo />}></Route>
                    <Route path='/7 habitos' element={<NotFound />}></Route>
                    <Route path='/liderazgo equipo' element={<LiderazgoEquipo />}></Route>
                    <Route path='/circulo dorado' element={<NotFound />}></Route>
                    <Route path='/test de personalidad' element={<NotFound />}></Route>
                    <Route path='/¿que hacemos con federico?' element={<NotFound />}></Route>
                    <Route path='/preguntas' element={<NotFound />}></Route>
                    <Route path='/test de inteligencia emocional' element={<NotFound />}></Route>
                    <Route path='/planificar una negociación' element={<PlanificarNegociacion />}></Route>
                    <Route path='/creatividad' element={<NotFound />}></Route>
                </Routes>
            </main>
        </>
    )
}