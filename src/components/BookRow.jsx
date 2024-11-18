import React from 'react';
import '../styles/bookCard.css'
const BookRow = ({ book }) => {
  return (
    <div className='bookcardWrapper hover:scale-105 transform transition-transform duration-300 m-2 py-2 border border-1 border-gray-300 rounded-lg w-[22%] flex flex-col items-center justify-center bg-gray-300 hover:bg-gray-200'>
      <div className='flex flex-col items-center justify-center'>
        <img src={book.url} alt={book.title} width={"100%"}/>
      </div>
      <div className='py-1 font-normal'>
        <div className='flex justify-start '>
          <p className='font-semibold'>Title:</p>
          <p className='ml-1'>{book.title}</p>
        </div>
        <div className='flex justify-start'>
          <p className='font-semibold'>Author:</p>
          <p className='ml-1'>{book.author}</p>
        </div>
        <div className='flex justify-start'>
          <p className='font-semibold'>Genre:</p>
          <p className='ml-1'>{book.genre}</p>
        </div>
        <div className='flex justify-start'>
          <p className='font-semibold'>Rating:</p>
          <p className='ml-1'>{book.rating}</p>
        </div>
        <div className='flex justify-start'>
          <p className='font-semibold'>Published On:</p>
          <p className='ml-1'>{new Date(book.publishedDate).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default BookRow;
