import './LinkMenu.css'

export const LinkMenu = ({ title, setActivePage }) => {

    return (
        <a className='link__menu' href={`/fof-group-web/${title}`} onClick={() => setActivePage(title)} >{ title }</a>
    )
}