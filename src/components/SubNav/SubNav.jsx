import './SubNav.css'
import LinkMenu from '../LinkMenu/LinkMenu'


export default function SubNav({ links, setActiveSubMenu }) {
    return (
        <ul className='nav subnav'>
            {links.map((link, index) => (
                <li key={index}>
                    <LinkMenu title={link} 
                    setActiveMenu={() => setActiveSubMenu(link)}
                    />
                </li>
            ))}
        </ul>
    )
}