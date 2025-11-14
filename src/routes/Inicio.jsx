import './Pages.css'

export const Inicio = () => {
    return (
        <div className="page__container">
            <h1 className='inicio_titulo'> Trabajo Práctico Integrador</h1>
            <h1 className='inicio_titulo'>Liderazgo y Negociación</h1>
            <div className='inicio__profesor'>
                <h2>Profesor</h2>
                <h3>Luis Fernando Serna</h3>
            </div>
            <div className='inicio__estudiantes'>
                <h2>Estudiantes</h2>
                <h3>Silvana Pisano</h3>
                <h3>Federico Flores</h3>
                <h3>Valentin Longás</h3>
                <h3>Lucas García</h3>
                <h3>Tiago Mazzeo</h3>
            </div>
        </div>
    )
}