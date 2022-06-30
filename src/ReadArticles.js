import React, { useEffect, useState } from 'react';
import { Table, Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


function ReadArticles() {

    const location = "http://127.0.0.1:8000/";

    const [APIData, setAPIData] = useState([]);

    useEffect(() => {

        axios.get('http://127.0.0.1:8000/api/article/list')
            .then((response) => {
                setAPIData(response.data);
                console.log(response.data)
            })
    }, [])


    const setData = (data) => {
        var path = `http://127.0.0.1:8000/api/article/delete/`;
        var id = data.articlesId;
        var createLink = path + id;

        axios.delete(createLink).then(res => {
            const newArticleList = APIData.filter(data => data.articlesId !== id);
            setAPIData(newArticleList);
        });
    }

    return (
        <Container fluid className='mt-5'>
            <Row className='px-5'>

                <Col className='mt-5'>
                    <p className='text-light text-center fs-1 mt-5'>
                        Liste
                    </p>
                </Col>

                <Col className='col-12 ms-5'>
                    <a type="button" href='/CreateArticle' class="btn btn-primary">
                        <FontAwesomeIcon icon={faPlusCircle} />  Ajouter
                    </a>
                </Col>

                <Col className='mt-3 col-12'>
                    <Table className='mt-5' responsive striped bordered hover variant="dark" style={{ textAlign: "center" }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Content</th>
                                <th>Image</th>
                                <th>Modifier</th>
                                <th>Supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {APIData.map((data) => {
                                return (
                                    <tr key={data.articlesId}>
                                        <td className='align-middle'>{data.articlesId}</td>
                                        <td className='align-middle'>{data.title}</td>
                                        <td className='align-middle'>{data.date}</td>
                                        <td className='align-middle'>{data.content}</td>
                                        <td><img className='w-50' src={location + data.image} /></td>
                                        <td className='align-middle'>
                                            <Button variant="primary">
                                                Modifier
                                            </Button>
                                        </td>
                                        <td className='align-middle'>


                                        <Button variant="danger" autoFocus onClick={() => setData(data)} className="ms-4">Supprimer</Button>


                                         
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}


export default ReadArticles;