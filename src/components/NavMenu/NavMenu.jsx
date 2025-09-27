import './NavMenu.css'
import { Link } from 'react-router-dom'

export const NavMenu = ({ items, activePage, setActivePage }) => {
    
    return(
        <nav>
            {
                items[activePage].map((subitem) => {
                    return (
                        <Link className='link__menu'
                        title={subitem} 
                        setActivePage={setActivePage}
                        to ={`/${subitem.toLowerCase()}`}
                        >{subitem.toUpperCase()}</Link>
                    )
                    
                })
            }
        </nav>
    )

}