import './SubNav.css'
import LinkMenu from '../LinkMenu/LinkMenu'


const SubNav = ({ items }) => {
    return (
        <ul className='nav subnav'>
            {items.map(item => {
                <li>{item}</li>
            })}
        </ul>
    )
}

export default SubNav