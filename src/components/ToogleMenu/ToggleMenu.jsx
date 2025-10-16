import './ToggleMenu.css'
import { Link } from 'react-router-dom'

export const ToggleMenu = ({ menuItems, setActivePage, setActiveSubPage, handleToggleMenu, isMenuActive }) => {

    return (
        <>
            <img className='tooglemenu__open-icon' src="./toggle-menu-open.svg" frameBorder="0" onClick={() => handleToggleMenu(true)}></img>
            
            <div className={`togglemenu__container ${isMenuActive ? 'togglemenu__active' : ''}`}>
                <img className='togglemenu__close-icon' src="./toggle-menu-close.svg" frameBorder="0" onClick={() => handleToggleMenu(false)}></img>
                <nav className='togglemenu__subnav'>
                    {Object.keys(menuItems).map((item) => (
                        <Link
                            className='togglemenu__link-menu'
                            key={item}
                            onClick={() => {
                                handleToggleMenu(false)
                                setActivePage(item)
                            }}
                            to={`/${menuItems[item][0].toLowerCase()}`}
                        >
                            {item.toUpperCase()}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    )
}
