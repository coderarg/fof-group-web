import './HeaderMenu.css'
import { NavMenu } from '../NavMenu/NavMenu'

const menuItems = {
    'nosotros': ['acerca de','organigrama'],
    'estilos': ['cohercitivo', 'afiliativo'],
    'situacional': ['participativo', 'delegativo'],
    'liderazgo' : ['liderazgo conciente', 'liderazgo transformacional'],
    'liderazgo efectivo': ['7 habitos', 'circulo dorado']
}


export const HeaderMenu = ({ activePage, setActivePage, setActiveSubPage }) => {

    return(
        <header>
            <div className="logo_container">
                <a href="/fof-group-web/">
                    <h1><span>FOF </span>GROUP</h1>
                </a>
                <p>TRANSPORTE | DISTRIBUCIÓN | FERRETERÍA</p>
            </div>

            <nav className='subnav'>    
                {
                    Object.keys(menuItems).map((item) => {
                        return <a className='link__menu' 
                        onClick={() => setActivePage(item)}>{item}</a>
                    })
                }
            </nav>
            { activePage !== 'inicio' &&
                <NavMenu 
                items={menuItems}
                activePage={activePage}
                setActivePage={setActiveSubPage}
                ></NavMenu>
            }
            
        </header>
    ) 
}