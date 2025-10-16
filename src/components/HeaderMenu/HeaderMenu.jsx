import './HeaderMenu.css'
import { NavMenu } from '../NavMenu/NavMenu'
import { ToggleMenu } from '../ToogleMenu/ToggleMenu'
import { useState } from 'react'

export const HeaderMenu = ({ activePage, setActivePage, setActiveSubPage }) => {

    const menuItems = {
        'inicio': [''],
        'nosotros': ['acerca de', 'organigrama', 'explicación'],
        'estilos': ['cohercitivo', 'afiliativo'],
        'situacional': ['participativo', 'delegativo'],
        'liderazgo': ['liderazgo conciente', 'liderazgo transformacional'],
        'liderazgo efectivo': ['7 habitos', 'circulo dorado'],
        'liderazgo en equipo': ['test de personalidad'],
        'coaching': ['¿que hacemos con federico?', 'preguntas'],
        'inteligencia emocional': ['test de inteligencia emocional']
    }


    const [isMenuActive, setIsMenuActive] = useState(false)

    function handleToggleMenu(isOpen) {
        setIsMenuActive(isOpen)
    }

    return (
        <header>
            <div className="header__toogle-icon-container">
                <ToggleMenu menuItems={menuItems}
                    handleToggleMenu={handleToggleMenu}
                    isMenuActive={isMenuActive}
                    setActivePage={setActivePage}
                    setActiveSubPage={setActiveSubPage} />
            </div>
            <div className="logo__container">
                <a href="/fof-group-web/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
                    </svg>
                    <h1 className='logo__title'><span>FOF </span>GROUP</h1>
                </a>
                <p>TRANSPORTE  |  DISTRIBUCIÓN  |  FERRETERÍA</p>
            </div>
            {activePage !== 'inicio' &&
                <NavMenu
                    items={menuItems}
                    activePage={activePage}
                    setActivePage={setActiveSubPage}
                    handleToggleMenu={handleToggleMenu}
                ></NavMenu>
            }

        </header>
    )
}