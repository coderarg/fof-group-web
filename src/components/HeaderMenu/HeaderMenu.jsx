import './HeaderMenu.css'
import SubNav from '../SubNav/SubNav'
import LinkMenu from '../LinkMenu/LinkMenu'
import { useState } from 'react'

const menuLinks = {
    "Nosotros" : [ 'Descripción', 'Organigrama', 'Misión - Visión - Valores'],
    "Estilos": ['Estilo 1', 'Estilo 2', 'Estilo 3'],
    "Situacional": ['Situación 1', 'Situación 2']
}


export default function HeaderMenu() {
    const [activeMenu, setActiveMenu] = useState('')
    const [activeSubMenu, setActiveSubMenu] = useState('')

    return(
        <header>
            <div className='logo__container'>
                <h1><span>FOF </span>GROUP</h1>
                <p>TRANSPORTE | DISTRIBUCIÓN | FERRETERÍA</p>
            </div>
            <nav className='nav'>
                {Object.keys(menuLinks).map(title => (
                    <LinkMenu
                        key={title}
                        title={title}
                        setActiveMenu={() => {
                            setActiveMenu(title)
                            setActiveSubMenu('')
                        }}
                    />
                ))}
            </nav>
            {activeMenu && (
                <SubNav 
                    links={menuLinks[activeMenu]} 
                    setActiveSubMenu={subMenu => {
                        setActiveSubMenu(subMenu)
                        if (onSubMenuClick) onSubMenuClick(subMenu)
                    }}
                />
            )}
        </header>
    ) 
}