import { LinkMenu } from '../LinkMenu/LinkMenu'

export const NavMenu = ({ items, activePage, setActivePage }) => {
    
    return(
        <nav>
            {
                items[activePage].map((subitem) => {
                    return <LinkMenu title={subitem} setActivePage={setActivePage}></LinkMenu>
                })
            }
        </nav>
    )

}