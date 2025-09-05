import './LinkMenu.css'

const LinkMenu = ({ title, setActiveMenu }) => {

    return <button className='link__menu' onClick={setActiveMenu}>{ title }</button>
}

export default LinkMenu
