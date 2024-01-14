import Carousel from 'react-bootstrap/Carousel';
import myImage1 from '../asset/img/fotocurso3.jpg';
import myImage2 from '../asset/img/fotocurso4.jpg';
import myImage3 from '../asset/img/fotocurso5.jpg';
import './style/nosotros.css'


export const Nosotros = () => {

    return (
        <section className="nosotros d-flex flex-sm-row-reverse flex-column" id="Nosotros">
            <div className="nosotros-carrusel container mt-1 mb-2" >
                <Carousel data-bs-theme="dark" data-bs-ride="carousel">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={myImage1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={myImage2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={myImage3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="nosotros-tex">
                <h2 className="h2 display-3">Sobre Sabri cerámico</h2>
                <p className="fs-3">Nuestro taller es un espacio donde puedes aprender el arte de la cerámica, compartir una
                    charla,
                    dar rienda suelta a tu creatividad y hacer una pausa en tu rutina diaria, dejando las preocupaciones
                    a
                    un lado, un lugar en el que cada alumno es Único.
                    Te animamos a crear, a dedicarte un rato para desconectar de todo y conectar con tu parte creativa,
                    conoce este mundo increíble que es la Cerámica.
                </p>
                <p className="fs-3">Vení a conocer el Maravilloso  mundo de la cerámica!!</p>
            </div>
        </section >
    )
}
