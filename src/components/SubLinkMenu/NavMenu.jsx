import './NavMenu.css'
import { LinkMenu } from '../LinkMenu/LinkMenu'

export const NavMenu = ({ items, activePage, getActiveSubPage }) => {
    
    return(
        <nav>
            {
                items[activePage].map((subitem) => {
                    return <LinkMenu getActivePage={getActiveSubPage} title={subitem}></LinkMenu>
                })
            }
        </nav>
    )

}