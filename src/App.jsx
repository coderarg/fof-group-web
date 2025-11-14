import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu'
{/* Importar Diapositivas*/ }
import { Nosotros } from './routes/diapositivas/Nosotros'
import { Estilos } from './routes/diapositivas/Estilos'
import { Liderazgo } from './routes/diapositivas/Liderazgo'
import { Situacional } from './routes/diapositivas/Situacional'
import { LiderazgoEfectivo } from './routes/diapositivas/LiderazgoEfectivo'
import { LiderazgoEquipo } from './routes/diapositivas/LiderazgoEquipo'
import { Coaching } from './routes/diapositivas/Coaching'
import { TeoriaConflicto } from './routes/diapositivas/TeoriaConflicto'

{/* Importar Páginas Internas*/ }
import { Inicio } from './routes/Inicio'
import { AcercaDe } from './routes/AcercaDe'
import { Organigrama } from './routes/Organigrama'
import { Explicacion } from './routes/Explicacion'
import { Coercitivo } from './routes/Coercitivo'
import { Afiliativo } from './routes/Afiliativo'
import { Participativo } from './routes/Participativo'
import { Delegativo } from './routes/Delegativo'
import { Habitos } from './routes/Habitos'
import { CirculoDorado } from './routes/CirculoDorado'
import { TestPersonalidad } from './routes/TestPersonalidad'
import { PlanDeAccion } from './routes/PlanDeAccion'
import { TestEscuchaActiva } from './routes/TestEscuchaActiva'
import { Preguntas } from './routes/Preguntas'
import { PlanificarNegociacion } from './routes/PlanificarNegociacion'

import { NotFound } from './routes/404NotFound'
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
                    {/*Inicio y Descripción de Empresa*/}
                    <Route path='/' element={<Inicio />}></Route>
                    <Route path='/nosotros' element={<Nosotros />}></Route>
                    <Route path='/acerca de' element={<AcercaDe />}></Route>
                    <Route path='/organigrama' element={<Organigrama />}></Route>
                    <Route path='/explicación' element={<Explicacion />}></Route>
                    {/*Unidad 1: Estilos de Liderazgo*/}
                    <Route path='/estilos' element={<Estilos />}></Route>
                    <Route path='/coercitivo' element={<Coercitivo />}></Route>
                    <Route path='/afiliativo' element={<Afiliativo />}></Route>
                    {/*Unidad 2: Liderazgo Situacional*/}
                    <Route path='/situacional' element={<Situacional />}></Route>
                    <Route path='/participativo' element={<Participativo />}></Route>
                    <Route path='/delegativo' element={<Delegativo />}></Route>
                    {/*Unidad 3: Liderazgo Consciente, Transformacional y de Servicio*/}
                    <Route path='/liderazgo' element={<Liderazgo />}></Route>
                    <Route path='/liderazgo conciente' element={<LiderazgoConciente />}></Route>
                    <Route path='/liderazgo transformacional' element={<LiderazgoTransformacional />}></Route>
                    {/*Unidad 4: Liderazgo Efectivo*/}
                    <Route path='/liderazgo efectivo' element={<LiderazgoEfectivo />}></Route>
                    <Route path='/7 habitos' element={<Habitos />}></Route>
                    <Route path='/circulo dorado' element={<CirculoDorado />}></Route>
                    {/*Unidad 5: Liderazgo en Equipo*/}
                    <Route path='/liderazgo de equipo' element={<LiderazgoEquipo />}></Route>
                    <Route path='/test de personalidad' element={<TestPersonalidad />}></Route>
                    <Route path='/plan de acción' element={<PlanDeAccion />}></Route>
                    {/*Unidad 6: Coaching e Inteligencia Emocional*/}
                    <Route path='Coaching' element={<Coaching />}></Route>
                    <Route path='/test escucha activa' element={<TestEscuchaActiva />}></Route>
                    <Route path='/preguntas' element={<Preguntas />}></Route>
                    <Route path='/test de inteligencia emocional' element={<NotFound />}></Route>
                    {/*Unidad 7: Teoría del Conflicto*/}
                    <Route path='/teoría del conflicto' element={<TeoriaConflicto />}></Route>
                    <Route path='/planificar una negociación' element={<PlanificarNegociacion />}></Route>
                    {/*Unidad 8: Análisis de Caso de Negociación*/}
                    {/*Unidad 9: Programación Neurolenguística*/}
                    {/*Unidad 10: Creatividad y Generación de opciones*/}
                    <Route path='/creatividad' element={<NotFound />}></Route>
                </Routes>
            </main>
        </>
    )
}