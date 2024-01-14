import React, { useState } from 'react';
import { Form, Button, Row, Col, Collapse, Container, Alert } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { validarFormulario } from './validacion';
import './formulario.css';


export const Formulario = ({ open }) => {

    const [validated, setValidated] = useState(false);
    const [formularioEnviado, setFormularioEnviado] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = await validarFormulario(event);

        if (isValid) {
            setFormularioEnviado(true);
        }

        setValidated(true);
    };

    return (
        <Collapse in={open}>
            <main className="container sections justify-content-center mt-2" id="example-collapse-text">
                <Container className="d-flex justify-content-center">
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <h3 className="display-3 text-center mb-1 pt-2 label">Formulario de inscripción</h3>
                        </Col>
                        <Col md={8}>
                            {formularioEnviado ? (
                                <Alert variant="success">
                                    ¡Gracias por inscribirte!
                                </Alert>
                            ) : (
                                <Form id="coursesform" onSubmit={handleSubmit} noValidate validated={validated}>
                                    <Row>
                                        <Col md={6} className="mb-3 mt-3">
                                            <Form.Group controlId="form-name">
                                                <Form.Label  className="label">Nombre</Form.Label>
                                                <Form.Control type="text" required />
                                                <Form.Control.Feedback type="invalid">Por favor, ingresa tu nombre.</Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} className="mb-3 mt-3">
                                            <Form.Group controlId="form-lastname">
                                                <Form.Label className="label">Apellido</Form.Label>
                                                <Form.Control type="text" required />
                                                <Form.Control.Feedback type="invalid">Por favor, ingresa tu apellido.</Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} className="mb-3">
                                            <Form.Group controlId="form-email">
                                                <Form.Label className="label">Email</Form.Label>
                                                <Form.Control type="email" placeholder="name@example.com" required />
                                                <Form.Control.Feedback type="invalid">Por favor, ingresa una dirección de correo electrónico válida.</Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                        <Col md={12} className="mb-3">
                                            <Form.Group controlId="form-phone-number">
                                                <Form.Label className="label">Celular</Form.Label>
                                                <Form.Control type="number" required />
                                                <Form.Control.Feedback type="invalid">Por favor, ingresa un número de celular válido.</Form.Control.Feedback>
                                                <Form.Text id="phone-help">
                                                    Con código de área sin el 0 y sin el 15. Ej. 223 5111111
                                                </Form.Text>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h5 className="label display-5">Seleccione el curso:</h5>
                                            <Form.Check
                                                type="radio"
                                                id="exampleRadios1"
                                                label="Curso 1"
                                                name="exampleRadios"
                                                value="option1"
                                                required
                                            />
                                            <Form.Check
                                                type="radio"
                                                id="exampleRadios2"
                                                label="Curso 2"
                                                name="exampleRadios"
                                                value="option2"
                                                required
                                            />
                                            <Form.Check
                                                type="radio"
                                                id="exampleRadios3"
                                                label="Curso 3"
                                                name="exampleRadios"
                                                value="option3"
                                                required
                                            />
                                        </Col>
                                    </Row>
                                    <Button type="submit" className="mt-2 mb-2 boton-enviar">
                                        Enviar
                                    </Button>
                                </Form>
                            )}
                        </Col>
                    </Row>
                </Container>
            </main>
        </Collapse>
    );
};