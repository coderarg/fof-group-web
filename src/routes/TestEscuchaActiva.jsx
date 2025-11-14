import './Pages.css'

export const TestEscuchaActiva = () => {
    return (
        <div className='page__container'>
            <h1>Test de Escucha Activa</h1>
            <table>
                <thead>
                    <tr>
                        <th>Cuestionario</th>
                        <th>Respuesta</th>
                    </tr>
                </thead>

                <tr>
                    <td>
                        1. Si me doy cuenta de lo que el otro está por preguntar, me anticipo y le contesto directamente, para ahorrar tiempo.
                    </td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>
                        2. Mientras escucho a otra persona, me adelanto en el tiempo y me pongo a pensar en lo que le voy a responder.
                    </td>
                    <td>
                        Si
                    </td>
                </tr>

                <tr>
                    <td>
                        3. En general procuro centrarme en lo que está diciendo el otro, sin considerar cómo lo está diciendo.
                    </td>
                    <td>
                        No
                    </td>
                </tr>

                <tr>
                    <td>
                        4. Mientras estoy escuchando, digo cosas como: “Ajá”, “Hum…”, “Entiendo”… para hacerle saber a la otra persona que le estoy prestando atención.
                    </td>
                    <td>
                        Si
                    </td>
                </tr>

                <tr>
                    <td>
                        5. Creo que a la mayoría de las personas no les importa que las interrumpa, siempre que las ayude en sus problemas.
                    </td>
                    <td>
                        No
                    </td>
                </tr>

                <tr>
                    <td>
                        6. Cuando escucho a algunas personas, mentalmente me pregunto: “¿Por qué les resultará tan difícil ir directamente al grano?”
                    </td>
                    <td>
                        Si
                    </td>
                </tr>

                <tr>
                    <td>
                        7. Cuando una persona realmente enojada expresa su cólera, yo dejo que lo que dice “me entre por un oído y me salga por el otro”.
                    </td>
                    <td>
                        No
                    </td>
                </tr>

                <tr>
                    <td>
                        8. Si no comprendo lo que una persona está diciendo, hago las preguntas necesarias hasta entenderlo.
                    </td>
                    <td>
                        Si
                    </td>
                </tr>

                <tr>
                    <td>
                        9. Solamente discuto con una persona cuando sé positivamente que estoy en lo cierto.
                    </td>
                    <td>
                        No
                    </td>
                </tr>

                <tr>
                    <td>
                        10. Dado que he escuchado las mismas quejas y protestas infinidad de veces, generalmente me dedico mentalmente a otra cosa mientras escucho.
                    </td>
                    <td>
                        Si
                    </td>
                </tr>
                <tr>
                    <td>
                        11. Si una persona está triste, escucho todo hasta que termine su catarsis.
                    </td>
                    <td>Si</td>
                </tr>
                <tr>
                    <td>
                        12. Si una persona tiene dificultades en decirme algo, generalmente la ayudo a expresarse.
                    </td>
                    <td>
                        Si
                    </td>
                </tr>
                <tr>
                    <td>
                        13. Si no interrumpiera a las personas de vez en cuando, ellas terminarían hablándome durante horas.
                    </td>
                    <td>
                        No
                    </td>
                </tr>
                <tr>

                    <td>
                        14. Cuando escucho a otra persona, muchas veces siento que superaría mi capacidad para retener todo, de modo que prefiero centrarme solo en una parte.

                    </td>
                    <td>
                        No
                    </td>
                </tr>
                <tr>
                    <td>
                        15. Si una persona está realmente molesta, lo mejor que puedo hacer es escucharlo hasta que se desahogue.
                    </td>
                    <td>
                        Si
                    </td>
                </tr>
                <tr>
                    <td>
                        16. Si el testimonio de una persona me acaba de decir, me parece incoherente, vuelvo a preguntarle para verificar.
                    </td>
                    <td>
                        Si
                    </td>
                </tr>
                <tr>

                    <td>
                        17. Cuando una persona está equivocada acerca de algún punto de su problema, es mejor interrumpirla y hacerle ver rápidamente una respuesta correcta.
                    </td>
                    <td>
                        No
                    </td>
                </tr>
                <tr>
                    <td>
                        18. Cuando escucho a otra persona trato de ponerme en sus zapatos (simular cómo me sentiría yo en su lugar).
                    </td>
                    <td>
                        Si
                    </td>
                </tr>
                <tr>
                    <td>
                        19. Cuando aconsejo a otras personas, los hago en función de la manera en que yo resolvería mis propios problemas.
                    </td>
                    <td>
                        Si
                    </td>
                </tr>
                <tr>
                    <td>
                        20. Si una persona no puede decirme exactamente qué quiere de mí, no hay nada que yo pueda hacer.
                    </td>
                    <td>
                        No
                    </td>
                </tr>
            </table >
            <h2>Resultados</h2>
            <ol>
                <li>
                    Escuchar sin interrumpir y menos contradecir → 4 puntos
                </li>
                <p>
                    3 – 4 puntos: A veces interrumpe, pero si logra esperar, sus vínculos serán más fluidos.
                </p>
                <li>
                    Escuchar prestando 100% de atención → 1 punto
                </li>
                <p>
                    0 – 2 puntos: Probablemente simula atención, pero no escucha realmente. Esto lo lleva a confusión o pérdida de información importante.
                </p>
                <li>
                    Escuchar más allá de las palabras → 2 puntos
                </li>
                <p>
                    2 puntos: Capta parcialmente las emociones, aunque se centra más en el contenido literal del mensaje.
                </p>
                <li>
                    Escuchar incentivando al otro a profundizar → 2 puntos
                </li>
                <p>
                    0 – 2 puntos: Puede transmitir desinterés o falta de apertura, lo que desalienta a la otra persona a expresarse con libertad.
                </p>
            </ol>
            <h3>
                Interpretación global → 9 puntos
            </h3>
            <p>
                6 – 10 puntos: Escucha limitada, centrada más en sí mismo que en el otro.
            </p>

        </div >
    )
}