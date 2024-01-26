import './style/home.css'

export const Home = () => {
    return (
        <section className="home" id='Home'>
            <div className="titulo-p">
                <h1 className="h1 text-center text-uppercase display-1">
                    Taller de Cerámica en Mar Del Plata <strong>Sabri Ceramica</strong>
                </h1>
                <p className="parrafo text-xl-center fs-3">
                    La cerámica es un antiguo arte que ha perdurado a lo largo de la
                    historia, es
                    mucho más que la simple manipulación de arcilla. Es una disciplina artística que invita a la
                    creatividad
                    y la destreza técnica para dar vida a objetos y obras de arte únicos. Imagina la emoción de moldear
                    la
                    arcilla según tu visión, y luego verla transformarse en piezas sólidas.</p>
                <a href="#Curso">
                    <button className="home-boton">Curso</button>
                </a>
            </div>
        </section>
    )
}
