import './HeaderMenu.css'
import { NavMenu } from '../SubLinkMenu/NavMenu'
import { LinkMenu } from '../LinkMenu/LinkMenu'

export const HeaderMenu = ({ menuItems, activePage, getActivePage, getActiveSubPage }) => {

    return(
        <header>
            <div className="logo_container">
                <h1><span>FOF </span>GROUP</h1>
                <p>TRANSPORTE | DISTRIBUCIÓN | FERRETERÍA</p>
            </div>

            <nav>
                {
                    Object.keys(menuItems).map((item) => {
                        return(<LinkMenu key={item} getActivePage={getActivePage} title={item}></LinkMenu>)
                    })
                }
            </nav>
            {activePage !== "Inicio" && <NavMenu activePage={activePage} getActiveSubPage={getActiveSubPage} items={menuItems}></NavMenu>}
            

        </header>
    ) 
}