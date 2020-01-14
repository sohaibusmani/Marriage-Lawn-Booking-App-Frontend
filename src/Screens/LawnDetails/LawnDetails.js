import React from 'react';
import {Card, Container, Col, Row } from 'react-bootstrap';


class LawnDetails extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Container>
                <Row>
                        <Col>
                            <Card style={{width:'85rem', marginTop:'1rem', marginLeft:'-130px', height:'20rem', border:'solid 1px #ff0147' }}>
                                
                                <Card.Body>
                                    <Card.Title style={{textAlign:'center', marginTop:'100px', fontFamily:'sens-serif' }}><h1>Lawn Details</h1></Card.Title>
                                    
                                    
                                </Card.Body>
                            </Card>
                            
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
 

export default LawnDetails ;