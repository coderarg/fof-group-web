import './NavMenu.css'
import { Link } from 'react-router-dom'

export const NavMenu = ({ items, activePage, setActivePage, handleToggleMenu }) => {

    return (
        <nav>
            {
                items[activePage].map((subitem) => {
                    return (
                        <Link className='link__menu'
                            title={subitem}
                            setActivePage={setActivePage}
                            to={`/${subitem.toLowerCase()}`}
                            onClick={() => handleToggleMenu(false)}>
                            {subitem.toUpperCase()
                            }</Link>
                    )

                })
            }
        </nav>
    )

}