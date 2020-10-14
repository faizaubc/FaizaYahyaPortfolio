import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Container from 'react-bootstrap/Container';


function Hero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col md={8} sm={12}>
                    {props.title && <h1 className= " display-3 font-weight-bolder">{props.title}</h1> }
                    {props.subtitle && <h3 className= " display-6 font-weight-lighter">{props.subtitle}</h3> }
                    {props.text && <h3 className= " lead font-weight-lighter">{props.text}</h3> }

                    </Col>
                </Row>
            </Container>

        </Jumbotron>
    )
}

export default Hero
