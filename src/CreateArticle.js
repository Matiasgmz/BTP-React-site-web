import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';

function CreateArticle() {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const formData = new FormData();

    const uploadFileHandler = async (e) => {
        let file = e.target.files[0];

        if (file) {
            e.preventDefault();
            console.log('ok')
            formData.append('image', file);
            console.log(formData.get('image'))
        }

    }

    const postData = async (e) => {
        formData.append('title', title);
        formData.append('date', date);
        formData.append('content', content);
        console.log(formData);
        const headers = {
            'Content-Type': 'multipart/form-data'
        };
        axios.post(`http://127.0.0.1:8000/api/article/create`, formData, { headers }
        ).then(res => {
            console.log(res);
        })
            .catch(error => {
                console.log(error);
            })
        console.log(formData.get('image'))
        // console.log(formData.get('date'))
        // console.log(formData.get('title'))
        // console.log(formData.get('content'))
    }

    return (

        <Col className='mt-5'>

            <Col className='mt-5'>
                <a type="button" className='my-5' href='/ReadArticles' class="btn btn-secondary">Liste de produit</a>
            </Col>
            
            <Form className='mt-5' action='/ReadArticles'>
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
                    <Form.Control type="file" onChange={uploadFileHandler} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={postData}>
                    Envoyer
                </Button>
            </Form>
        </Col>
    )

}

export default CreateArticle