import React from 'react'
import Grid from '@material-ui/core/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ContainerBoost = () => {

    function alerta(){
        alert('Desde boostrap 4')
    }

    return(
        <Row>
            <Col>
                <h2>Hola desde reactjs HAHAHA Yoandre con el watch!</h2>
            </Col>
            <Col>
            
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={alerta} >Go somewhere</Button>
                </Card.Body>
            </Card>

            </Col>
            <Col></Col>
        </Row>
    )
}

export default ContainerBoost;