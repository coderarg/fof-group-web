import './LinkMenu.css'

export default function LinkMenu({ title, setActiveMenu }) {

    return <button className='link__menu' onClick={setActiveMenu}>{ title }</button>
}
