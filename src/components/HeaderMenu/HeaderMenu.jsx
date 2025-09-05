import './HeaderMenu.css'
import LinkMenu from '../LinkMenu/LinkMenu'
import SubNav from '../SubNav/SubNav'

import { useState } from 'react'

const menuItems = {
    "Nosotros" : [ 'Descripción', 'Organigrama', 'Misión - Visión - Valores'],
    "Estilos": ['Estilo 1', 'Estilo 2', 'Estilo 3'],
    "Situacional": ['Situación 1', 'Situación 2']
}

const HeaderMenu = ( {activePage, setActivePage} ) => {

    return(
        <header>
            <div className="logo_container">
                <h1><span>FOF </span>GROUP</h1>
                <p>TRANSPORTE | DISTRIBUCIÓN | FERRETERÍA</p>
            </div>

            <nav>
                <LinkMenu title="Inicio" setActiveMenu={() => setActivePage('Inicio')} />
                <LinkMenu title="Nosotros" setActiveMenu={() => setActivePage('Nosotros')} />
                <LinkMenu title="Estilos" setActiveMenu={() => setActivePage('Estilos')} />
                <LinkMenu title="Situacional" setActiveMenu={() => setActivePage('Situacional')} />
            </nav>

            {/* <SubNav items={menuItems[activePage]} /> */}
        </header>
    ) 
}

export default HeaderMenu