import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import axios from 'axios';

function UpdateArticle() {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');

    const id = useParams();
    const postData = () => {
        axios.put(`${window.location.origin}/api/article/update/${id}`, {
            title,
            date,
            content,
            image
        })
    }

    console.log(id);

    return (
        <Form>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Titre</Form.Label>
                <Form.Control type="text" placeholder="Titre" onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="Date" onChange={(e) => setDate(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="content">
                <Form.Label>Contenu</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => setContent(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="image" >
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" onChange={(e) => setImage(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="button" onClick={postData}>
                Envoyer
            </Button>
        </Form>
    )

}

export default UpdateArticle