import React, { useState } from 'react';
import { Collapse, Container, Row, Col, FloatingLabel, Form, Button } from 'react-bootstrap';
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
                            <h3 className="display-4 text-center mb-1 pt-2">Formulario de inscripción</h3>
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
                                            <FloatingLabel controlId="form-name" label="Nombre">
                                                <Form.Control type="text" required />
                                                <Form.Control.Feedback type="invalid">Por favor, ingresa tu nombre.</Form.Control.Feedback>
                                            </FloatingLabel>
                                        </Col>
                                        <Col md={6} className="mb-3 mt-3">
                                            <FloatingLabel controlId="form-lastname" label="Apellido">
                                                <Form.Control type="text" required />
                                                <Form.Control.Feedback type="invalid">Por favor, ingresa tu apellido.</Form.Control.Feedback>
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} className="mb-3">
                                            <FloatingLabel controlId="form-email" label="Email">
                                                <Form.Control type="email" placeholder="name@example.com" required />
                                                <Form.Control.Feedback type="invalid">Por favor, ingresa una dirección de correo electrónico válida.</Form.Control.Feedback>
                                            </FloatingLabel>
                                        </Col>
                                        <Col md={12} className="mb-3">
                                            <FloatingLabel controlId="form-phone-number" label="Celular">
                                                <Form.Control type="number" required />
                                                <Form.Control.Feedback type="invalid">Por favor, ingresa un número de celular válido.</Form.Control.Feedback>
                                                <Form.Text id="phone-help">
                                                    Con código de área sin el 0 y sin el 15. Ej. 223 5111111
                                                </Form.Text>
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h5>Seleccione el curso:</h5>
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