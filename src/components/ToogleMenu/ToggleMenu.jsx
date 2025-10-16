import './ToggleMenu.css'

export const ToggleMenu = ({ menuItems, setActivePage, handleToggleMenu, isMenuActive }) => {

    return (
        <>
            <img className='tooglemenu__open-icon' src="./toggle-menu-open.svg" frameBorder="0" onClick={() => handleToggleMenu(true)}></img>
            <div className={`togglemenu__container ${isMenuActive ? 'togglemenu__active' : ''}`}>
                <img className='togglemenu__close-icon' src="./toggle-menu-close.svg" frameBorder="0" onClick={() => handleToggleMenu(false)}></img>
                <nav className='togglemenu__subnav'>
                    {Object.keys(menuItems).map((item) => (
                        <a
                            className='togglemenu__link-menu'
                            key={item}
                            onClick={() => {
                                handleToggleMenu(false)
                                setActivePage(item)
                            }}
                        >
                            {item.toUpperCase()}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    )
}
