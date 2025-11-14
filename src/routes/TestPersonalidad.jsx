import './Pages.css'

export const TestPersonalidad = () => {
    return (
        <div className="page__container">
            <h1>Test de Personalidad</h1>
            <img src="./test_personalidad_1.png" alt="resultado test personalidad 1" />
            <img src="./test_personalidad_2.png" alt="resultado test personalidad 1" />
            <table>
                <thead>
                    <tr>
                        <th>Factor</th>
                        <th>Baja</th>
                        <th>Percentil</th>
                        <th>Rango</th>
                        <th>Alta</th>
                    </tr>
                    <tr>
                        <td>Apertura a la experiencia</td>
                        <td>Tradicional, realista, práctico, conservador, prefiere los puntos vista tradicionales y la resolución técnica de los problemas</td>
                        <td>11</td>
                        <td>Bajo</td>
                        <td>Imaginativo, abierto de mente, le gusta experimentar, prefiere la resolución conceptual y creativa de los problemas.</td>
                    </tr>
                    <tr>
                        <td>Responsabilidad</td>
                        <td>Espontáneo, desorganizado prefiere planes flexibles, le disgustan los detalles precisos</td>
                        <td>84</td>
                        <td>Alto</td>
                        <td>Concienzudo, disciplinado, eficiente, bien organizado, le
                            gustan los detalles exactos, fuerte sentido del deber (Las personas con altas puntuaciones en esta  categoría se pueden describir
                            como "adictos al trabajo").</td>
                    </tr>
                    <tr>
                        <td>Extraversión</td>
                        <td>Reservado, formal, serio, callado,prefiere trabajar solo, evita los roles de liderazgo directo</td>
                        <td>65</td>
                        <td>Medio</td>
                        <td>Sociable, amistoso, asertivo,  le gusta trabajar con otros, disfruta con los roles de liderazgo directo</td>
                    </tr>
                    <tr>
                        <td>Cordialidad</td>
                        <td>Pragmático, escéptico, competitivo, orgulloso, prefiere la competición a la cooperación</td>
                        <td>37</td>
                        <td>Medio</td>
                        <td>Compasivo, le gusta complacer, bondadoso,  prefiere la cooperación a la competición y el conflicto.</td>
                    </tr>
                    <tr>
                        <td>Cordialidad</td>
                        <td>Pragmático, escéptico, competitivo, orgulloso, prefiere la competición a la cooperación</td>
                        <td>37</td>
                        <td>Medio</td>
                        <td>Compasivo, le gusta complacer, bondadoso,  prefiere la cooperación a la competición y el conflicto.</td>
                    </tr>
                    <tr>
                        <td>Estabilidad Emocional</td>
                        <td>No se altera fácilmente en situaciones estresantes,relajado, flexible, calmado.
                        </td>
                        <td>13</td>
                        <td>Bajo</td>
                        <td>Experimenta reacciones emocionalmente negativas y sentimientos de ansiedad, propenso a preocuparse fácilmente, se altera con facilidad
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}