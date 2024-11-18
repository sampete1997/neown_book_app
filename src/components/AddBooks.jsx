import React, { useState } from 'react';
import axios from 'axios';

const AddBooks = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    rating: '',
    publishedDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/', book);
      alert('Book added successfully');
    } catch (error) {
      console.error(error);
      alert('Error adding book');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={book.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={book.author}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={book.genre}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="rating"
        placeholder="Rating"
        value={book.rating}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="publishedDate"
        placeholder="Published Date"
        value={book.publishedDate}
        onChange={handleInputChange}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBooks;
