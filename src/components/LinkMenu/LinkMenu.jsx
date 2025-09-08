import './LinkMenu.css'

const LinkMenu = ({ title, setActivePage, setActiveSubPage }) => {

    return (
        <button className='link__menu' 
            onClick={() => {
                setActivePage(title)
                setActiveSubPage('')
            }}>{ title }
        </button>
    )
}

export default LinkMenu;
