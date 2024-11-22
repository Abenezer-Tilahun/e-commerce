import React from 'react';
import {
  Card, Button, Carousel, Container, Row, Col,
} from 'react-bootstrap';

import Laptop1 from '../../assets/images/home/Laptop 1.jpg';
import Laptop2 from '../../assets/images/home/Laptop 2.jpg';
import Laptop3 from '../../assets/images/home/Laptop 3.jpg';

const ProductMain = () => (
  <Container fluid className="product-main-container">
    <Row className="product-main-row">
      <Col md={12}>
        <Card className="product-main-card">
          <Row>
            {/* Left Column: Image Slider */}
            <Col md={6} className="product-image-col">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="product-image"
                    src={Laptop1}
                    alt="HP Laptop 1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="product-image"
                    src={Laptop2}
                    alt="HP Laptop 2"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="product-image"
                    src={Laptop3}
                    alt="HP Laptop 3"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>

            {/* Right Column: Product Details */}
            <Col md={6} className="product-details-col">
              <Card.Body>
                <Card.Title className="product-title">
                  HP 15.6 inch Laptop 15-fc0285AU, Silver
                </Card.Title>
                <Card.Text className="product-description">
                  Reliable computing yet stylish laptop that makes the wallet happy.
                  <ul className="product-specs">
                    <li>AMD Ryzen 3 processor</li>
                    <li>Windows 11 Home Plus Single Language</li>
                    <li>8GB LPDDR5 RAM</li>
                    <li>512 GB SSD Hard drive</li>
                    <li>15.6 inch FHD IPS</li>
                    <li>AMD Radeon™ Graphics</li>
                  </ul>
                </Card.Text>
                <div className="product-buttons">
                  <Button variant="success" className="product-button">
                    See Detail
                  </Button>
                  <Button variant="success" className="product-button">
                    Add to Cart
                  </Button>
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
