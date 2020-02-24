import React from 'react';
import '../css/main.css';

import { Card, Container, Row, Col } from 'react-bootstrap';

export default function Contact() {
  return (
    <div>
      Contact page
      <container>
        <div className='console'>
          <div className='cool-text'>
            <span className='animate-text'></span>
          </div>
        </div>
      </container>
      <hr />
      <hr />
      <Container>
        <Row>
          <Col sm>
            <Card bg='info' text='white' style={{ width: '20rem' }}>
              <Card.Header>map</Card.Header>
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
            <br />
          </Col>
          <Col sm>
            <Card bg='info' text='white' style={{ width: '20rem' }}>
              <Card.Header>gsm</Card.Header>
              <Card.Body>
                <Card.Title>Info Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Harum, eaque soluta fuga odio
                  quo mollitia cumque quisquam velit animi magni ipsam,
                  doloribus repellendus. Accusantium, tempore?
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
