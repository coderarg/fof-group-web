import './LinkMenu.css'

export const LinkMenu = ({ title, getActivePage }) => {

    return (
        <button className='link__menu' onClick={() => getActivePage(title)}>{ title }</button>
    )
}