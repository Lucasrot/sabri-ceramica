import React, { useState } from 'react';
import { Form, Button, Row, Col, Collapse, Container, Alert } from 'react-bootstrap';
import { validarFormulario } from './validacion';
import { useForm } from '@formspree/react';
import './formulario.css';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xvoezwvn");

    if (state.succeeded) {
        return <p>¡Hemos recibido tu solicitud. En la brevedad te responderemos para confirmar tu inscripción y darte más información!</p>;
    }

    return (
        <Form id="coursesform" onSubmit={handleSubmit} noValidate>
            <Row>
                <Col md={6} className="mb-3 mt-3">
                    <Form.Group controlId="form-name">
                        <Form.Label className="label">Nombre</Form.Label>
                        <Form.Control type="text" name="nombre" required />
                        <Form.Control.Feedback type="invalid">Por favor, ingresa tu nombre.</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6} className="mb-3 mt-3">
                    <Form.Group controlId="form-lastname">
                        <Form.Label className="label">Apellido</Form.Label>
                        <Form.Control type="text" name="apellido" required />
                        <Form.Control.Feedback type="invalid">Por favor, ingresa tu apellido.</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="mb-3">
                    <Form.Group controlId="form-email">
                        <Form.Label className="label">Correo Electrónico</Form.Label>
                        <Form.Control type="email" name="correo" placeholder="nombre@ejemplo.com" required />
                        <Form.Control.Feedback type="invalid">Por favor, ingresa una dirección de correo electrónico válida.</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={12} className="mb-3">
                    <Form.Group controlId="form-phone-number">
                        <Form.Label className="label">Número de Teléfono</Form.Label>
                        <Form.Control type="tel" name="telefono" required />
                        <Form.Control.Feedback type="invalid">Por favor, ingresa un número de teléfono válido.</Form.Control.Feedback>
                        <Form.Text id="phone-help">
                            Con código de área sin el 0 y sin el 15. Ej. 223 5111111
                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="mb-3">
                    <Form.Group controlId="formHorario">
                        <Form.Label>Seleccione el Horario</Form.Label>
                        <Form.Select name="horario" defaultValue="HORARIO" required>
                            <option disabled value="HORARIO">Seleccione un horario</option>
                            <option>lunes 13:00 p.m. A 16:00 p.m.</option>
                            <option>martes 9:30 a.m. A 16:00 p.m.</option>
                            <option>miércoles 9:00 a.m. A 16:00 p.m.</option>
                            <option>jueves 9:00 a.m. A 15:30 p.m.</option>
                            <option>viernes 9:00 a.m. A 16:00 p.m.</option>
                            <option>sábado 9:00 a.m. A 16:00 p.m.</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Por favor, seleccione un horario.</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Button type="submit" className="mt-2 mb-2 boton-enviar">
                Enviar
            </Button>
        </Form>
    );
};

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
                            <h3 className="display-3 text-center mb-1 pt-2 label">Solicitud de Inscripción</h3>
                        </Col>
                        <Col md={8}>
                            {formularioEnviado ? (
                                <Alert variant="success">
                                    ¡Hemos recibido tu solicitud. En la brevedad te responderemos para confirmar tu inscripción y darte más información!
                                </Alert>
                            ) : (
                                <ContactForm />
                            )}
                        </Col>
                    </Row>
                </Container>
            </main>
        </Collapse>
    );
};
