import React from 'react';
import {
  Card, Button, Carousel, Container, Row, Col,
} from 'react-bootstrap';

import Laptop1 from '../../assets/images/Laptop 1.jpg';
import Laptop2 from '../../assets/images/Laptop 2.jpg';
import Laptop3 from '../../assets/images/Laptop 3.jpg';

const ProductMain = () => (
  <Container fluid className="py-9">
    <Row className="justify-content-center">
      <Col md={12}>
        <Card className="shadow-lg p-3">
          <Row>
            {/* Left Column: Image Slider */}
            <Col md={6}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Laptop1}
                    alt="HP Laptop 1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Laptop2}
                    alt="HP Laptop 2"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Laptop3}
                    alt="HP Laptop 3"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>

            {/* Right Column: Product Details */}
            <Col md={6}>
              <Card.Body>
                <Card.Title className="fw-bold">
                  HP 15.6 inch Laptop 15-fc0285AU, Silver
                </Card.Title>
                <Card.Text>
                  Reliable computing yet stylish laptop that makes the wallet happy.
                  <ul>
                    <li>AMD Ryzen 3 processor</li>
                    <li>Windows 11 Home Plus Single Language</li>
                    <li>8GB LPDDR5 RAM</li>
                    <li>512 GB SSD Hard drive</li>
                    <li>15.6 inch FHD IPS</li>
                    <li>AMD Radeon™ Graphics</li>
                  </ul>
                </Card.Text>
                <div className="d-flex">
                  <Button variant="success" className="btnCard">
                    See Detail
                  </Button>
                  <Button variant="success" className="btnCard">Add to Cart</Button>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ProductMain;
