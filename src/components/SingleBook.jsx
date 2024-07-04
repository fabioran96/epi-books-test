import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const SingleBook = ({ book, onBookSelect }) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
    if (!selected) {
      onBookSelect(book.asin);
    } else {
      onBookSelect(null);
    }
  };

  return (
    <Card
      className="mb-4"
      onClick={toggleSelected}
      style={{ border: selected ? '2px solid red' : 'none' }}
    >
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
