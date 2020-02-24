import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import image2 from '../images/image2.jpg';

export default function Member() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm>
            <Card border='info' text='dark'>
              <Card.Header>Address</Card.Header>
              <Card.Img variant='top' src={image2} />
              <Card.Body>
                <Card.Title>Info Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Obcaecati magni architecto
                  doloribus voluptatibus deserunt nobis deleniti fuga porro
                  iste! Temporibus eius possimus similique inventore neque?
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </Col>
          <Col sm>
            <Card bg='info' text='white'>
              <Card.Header>map</Card.Header>
              <Card.Img variant='top' src={image2} />
              <Card.Body>
                <Card.Title>Info Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Facere explicabo, perspiciatis
                  magnam veritatis in nihil atque dolorum cumque, perferendis
                  fugiat fuga omnis debitis deleniti id?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <hr />
      <hr />
      <br />
    </div>
  );
}
