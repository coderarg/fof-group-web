import './SubLinkMenu.css'

const SubLinkMenu = ({ subTitle, setActiveSubPage }) => {

    return (
        <button className='link__menu' 
            onClick={() => {
                setActiveSubPage(subTitle)
            }}>{ subTitle }
        </button>
    )
}

export default SubLinkMenu;
