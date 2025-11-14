import './NavMenu.css'
import { Link } from 'react-router-dom'

export const NavMenu = ({ items, activePage, setActivePage, handleToggleMenu }) => {

    return (
        <nav className='navmenu'>
            {
                items[activePage].map((subitem) => {
                    console.log(subitem, items[activePage][0])
                    if (subitem != items[activePage][0]) {

                        return (
                            <Link className='link__menu'
                                to={`/${subitem.toLowerCase()}`}
                                onClick={() => {
                                    setActivePage(subitem)
                                    handleToggleMenu(false)
                                }}>
                                {subitem.toUpperCase()
                                }</Link>
                        )
                    }
                }
                )
            }
        </nav>
    )

}