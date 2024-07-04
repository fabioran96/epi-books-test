import React, { useState } from 'react';
import { Container, Row, Col, FormControl } from 'react-bootstrap';
import SingleBook from './SingleBook';

const BookList = ({ books, onBookSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <FormControl
        type="text"
        placeholder="Search by title"
        className="my-4"
        value={searchQuery}
        onChange={handleSearch}
      />
      <Row>
        {filteredBooks.map(book => (
          <Col sm={12} md={6} lg={4} key={book.asin}>
            <SingleBook book={book} onBookSelect={onBookSelect} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
