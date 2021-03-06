import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


// Components
import AdsCard from '../../Components/AdsCard/AdsCard'


class LandingPage extends React.Component {
    state = {

    }
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{width:'85rem', marginTop:'1rem', marginLeft:'-130px', height:'20rem', border:'solid 1px #ff0147' }}>
                                
                                <Card.Body>
                                    <Card.Title style={{textAlign:'center', marginTop:'100px', fontFamily:'sens-serif' }}><h1>Lawn Booking App</h1></Card.Title>
                                    
                                    
                                </Card.Body>
                            </Card>
                            
                        </Col>
                    </Row>
                    <Row style={{marginTop:'50px' , marginLeft:'-20px'}}>
                        <Col>
                        <AdsCard/>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default LandingPage;