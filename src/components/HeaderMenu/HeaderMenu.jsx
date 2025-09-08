import './HeaderMenu.css'
import LinkMenu from '../LinkMenu/LinkMenu'
import SubLinkMenu from '../SubLinkMenu/SubLinkMenu'

const HeaderMenu = ({ menuItems, activePage, setActivePage, setActiveSubPage }) => {

    return(
        <header>
            <div className="logo_container">
                <h1><span>FOF </span>GROUP</h1>
                <p>TRANSPORTE | DISTRIBUCIÓN | FERRETERÍA</p>
            </div>
            <nav>
                {
                    Object.keys(menuItems).map((item, index) => (
                        <LinkMenu 
                            key={index}
                            title = {item}
                            setActivePage={setActivePage}
                            setActiveSubPage={setActiveSubPage}
                            onClick={() => {
                                setActiveSubPage(menuItems[item][0])
                            }}
                        />
                    ))
                }
            </nav>
            <nav>
                {menuItems[activePage].map((subitem, index) => {
                    return(
                        <SubLinkMenu 
                            key={index}
                            subTitle={subitem}
                            setActiveSubPage={setActiveSubPage}
                        />
                    )
                })}
            </nav>

        </header>
    ) 
}

export default HeaderMenu