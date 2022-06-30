import React, { useState } from "react";
import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

const LoginPage = () => {

    const [credentials, setCrentials] = useState({
        username: "",
        password: ""
    });

    const handleChange = ({ currentTarget }) => {

        const { value, name } = currentTarget;

        setCrentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        
        <Container fluid className="mt-5">
            <Row className="justify-content-center">
                <Col xxl="3" lg="4" md="4" sm="6" xs="12" col="12" className="mt-5">

                    <p className="text-center fw-bold fs-1">Connexion</p>

                    <Form className="my-3 py-5" action="/add">

                        <FloatingLabel label="Username" className="mb-3">

                            <Form.Control
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Username"
                                onChange={handleChange}
                            />

                        </FloatingLabel>

                        <FloatingLabel label="Password" className="mb-3">

                            <Form.Control
                                id="password"
                                name="password"
                                type="password"
                                onChange={handleChange}
                            />

                        </FloatingLabel>

                        <Col className="text-end">
                            <Button variant="primary" className="mt-3" type="submit">
                                Valider
                            </Button>
                        </Col>

                    </Form>

                </Col>
            </Row>
        </Container>
    );
}

export default LoginPage;