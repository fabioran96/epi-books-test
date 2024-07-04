import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MyFooter = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>&copy; 2024 EpiBooks. All Rights Reserved.</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
