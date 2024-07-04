import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import Welcome from './components/welcome';
import BookList from './components/BookList';
import CommentArea from './components/CommentArea';
import scifiBooks from './data/scifi.json';
import { it } from 'vitest';

// Test per il componente Welcome
it('renders Welcome component', () => {
  render(<Welcome />);
  const welcomeElement = screen.getByText(/Welcome to EpiBooks!/i);
  expect(welcomeElement).toBeInTheDocument();
});

// Test per le bootstrap cards
it('renders correct number of bootstrap cards', () => {
  render(<BookList books={scifiBooks} onBookSelect={() => {}} />);
  const bookCards = screen.getAllByRole('img'); // Assuming the book cover image has a role of 'img'
  expect(bookCards.length).toBe(scifiBooks.length);
});

// Test per il componente CommentArea
it('renders CommentArea component', () => {
  render(<CommentArea asin="12345" />);
  const commentAreaElement = screen.getByText(/No comments yet/i);
  expect(commentAreaElement).toBeInTheDocument();
});

// Test per il filtraggio dei libri


// Test per il cambio di colore del bordo dei libri
it('changes book border color on click', () => {
  render(<BookList books={scifiBooks} onBookSelect={() => {}} />);
  const firstBook = screen.getAllByRole('img')[0];
  fireEvent.click(firstBook);

  expect(firstBook.parentElement).toHaveStyle('border: 2px solid red');
});

// Test per il ripristino del bordo del libro precedente


// Test per l'assenza di SingleComment all'avvio
it('no SingleComment instances at startup', () => {
  render(<App />);
  const comments = screen.queryAllByText(/Rating:/i);
  expect(comments.length).toBe(0);
});

// Test per il caricamento delle recensioni

