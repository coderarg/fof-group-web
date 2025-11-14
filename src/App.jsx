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
import { Negociacion } from './routes/diapositivas/Negociacion'
import { ProgramacionNeurolenguistica } from './routes/diapositivas/ProgramacionNeurolenguistica'
import { Creatividad } from './routes/diapositivas/Creatividad'

{/* Importar Páginas Internas*/ }
import { Inicio } from './routes/Inicio'
import { AcercaDe } from './routes/AcercaDe'
import { Organigrama } from './routes/Organigrama'
import { Explicacion } from './routes/Explicacion'
import { Coercitivo } from './routes/Coercitivo'
import { Afiliativo } from './routes/Afiliativo'
import { Participativo } from './routes/Participativo'
import { Delegativo } from './routes/Delegativo'
import { LiderazgoConciente } from './routes/LiderazgoConciente'
import { LiderazgoTransformacional } from './routes/LiderazgoTransformacional'
import { Habitos } from './routes/Habitos'
import { CirculoDorado } from './routes/CirculoDorado'
import { TestPersonalidad } from './routes/TestPersonalidad'
import { PlanDeAccion } from './routes/PlanDeAccion'
import { TestEscuchaActiva } from './routes/TestEscuchaActiva'
import { Preguntas } from './routes/Preguntas'
import { RumorDivide } from './routes/RumorDivide'
import { ResolucionConflictos } from './routes/ResolucionConflictos'
import { MariayTamara } from './routes/MariayTamara'
import { HistoriaNaranja } from './routes/HistoriaNaranja'
import { HumedalesBerazategui } from './routes/HumedalesBerazategui'


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
                    <Route path='/situacional' element={<Estilos />}></Route>
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
                    {/*Unidad 7: Teoría del Conflicto*/}
                    <Route path='/teoría del conflicto' element={<TeoriaConflicto />}></Route>
                    <Route path='/el rumor que divide' element={<RumorDivide />}></Route>
                    <Route path='/resolución de conflictos' element={<ResolucionConflictos />}></Route>
                    {/*Unidad 8: Negociación entre María y Tamara*/}
                    <Route path='/negociación' element={<Negociacion />}></Route>
                    <Route path='/maria y tamara' element={<MariayTamara />}></Route>
                    <Route path='/historia de la naranja' element={<HistoriaNaranja />}></Route>
                    <Route path='/humedales de berazategui' element={<HumedalesBerazategui />}></Route>
                    {/*Unidad 9: Programación Neurolenguística*/}
                    <Route path='/programación neurolengüística' element={<ProgramacionNeurolenguistica />}></Route>
                    {/*Unidad 10: Creatividad y Generación de opciones*/}
                    <Route path='/creatividad' element={<Creatividad />}></Route>
                </Routes>
            </main>
        </>
    )
}