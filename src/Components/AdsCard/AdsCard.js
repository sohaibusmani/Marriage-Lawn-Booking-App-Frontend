import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import pic from '../../Assets/Images/download.jpg'


class AdsCard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                <Card style={{ width: '18rem', border:'solid 1px #ff0147' }}>
                    <Card.Img variant="top" src={pic} />
                    <Card.Body>
                        <Card.Title>Reflection</Card.Title>
                        <Card.Text>
                            These are the Details
                        </Card.Text>
                        <Button href='/LawnDetails' style={{marginTop:'10px', marginLeft:'5rem', backgroundColor:'#ff0147', borderColor:'#ff0147'}}>Details</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem', border:'solid 1px #ff0147' }}>
                    <Card.Img variant="top" src={pic} />
                    <Card.Body>
                        <Card.Title>Reflection</Card.Title>
                        <Card.Text>
                            These are the Details
                        </Card.Text>
                        <Button href='/LawnDetails' style={{marginTop:'10px',marginLeft:'5rem', backgroundColor:'#ff0147', borderColor:'#ff0147'}}>Details</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem', border:'solid 1px #ff0147' }}>
                    <Card.Img variant="top" src={pic} />
                    <Card.Body>
                        <Card.Title>Reflection</Card.Title>
                        <Card.Text>
                            These are the Details
                        </Card.Text>
                        <Button href='/LawnDetails' style={{marginTop:'10px',marginLeft:'5rem', backgroundColor:'#ff0147', borderColor:'#ff0147'}}>Details</Button>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default AdsCard;