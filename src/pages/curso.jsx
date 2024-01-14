import { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';
import { Formulario } from './form/formulario';
import ReactPlayer from 'react-player';
import videoSource  from '../asset/video/cursada.mp4';
import './style/curso.css';

export const Curso = () => {

    const [open, setOpen] = useState(false);

    return (
        <section id="Curso">
            <Card className="mb-1 d-flex flex-sm-row flex-column">
                <div className='row curso'>
                    <div className="col-md-6 mt-1 mt-md-0">
                        <div className="video-container">
                            <ReactPlayer
                                url={videoSource}
                                controls
                                width="100%"
                                height="100%"
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            />
                        </div>
                    </div>

                    <div className="col-md-5 ">
                        <Card.Body>
                            <p className="card-text text-2">
                                <small className="text-muted">Profesora - Nadia Sabrina</small>
                            </p>
                            <h3 className="card-title text-center display-3">Animate a crear</h3>
                            <p className="card-text">
                                Podrás aprender diferentes técnicas de construcción de objetos manuales,
                                tratamientos de superficie y esmaltado de piezas, decoración de piezas con sellos y
                                engobes. Deja fluir tu creatividad.
                            </p>
                            <p> Podrás elegir entre realizar :</p>
                            <ul>
                                <li>2 tazas o tazones, azucarera y bandeja</li>
                                <li>Mate, azucarera, yerbera y bandeja</li>
                            </ul>
                            <p>Este curso incluyen materiales y horneado!!</p>

                            <div className="d-flex justify-content-center">
                                <Button
                                    onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}
                                    className='boton-card'
                                >
                                    Suscribirse
                                </Button>
                            </div>
                            <Formulario open={open} />

                            <p className="card-text text-1 mt-3">
                                <small className="text-muted">Profesora - Nadia Sabrina</small>
                            </p>
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </section>
    );
};

