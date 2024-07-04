import React, { useState } from 'react';
import './index.css';
import { Container, Row, Col } from 'react-bootstrap';
import MyNav from './components/myNav';
import MyFooter from './components/myFooter';
import Welcome from './components/welcome';
import BookList from './components/BookList';
import CommentArea from './components/CommentArea';
import scifiBooks from './data/scifi.json';

const App = () => {
  const [selectedBookAsin, setSelectedBookAsin] = useState(null);

  const handleBookSelect = (asin) => {
    setSelectedBookAsin(asin);
  };

  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <Row>
          <Col md={8}>
            <BookList books={scifiBooks} onBookSelect={handleBookSelect} />
          </Col>
          <Col md={4}>
            {selectedBookAsin ? (
              <CommentArea asin={selectedBookAsin} />
            ) : (
              <div>Select a book to see comments</div>
            )}
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
};

export default App;

