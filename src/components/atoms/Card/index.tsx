import React, { useState } from 'react';
import { Book } from '../../../types/Book';
import BookDetails from '../../organisms/DetailPage';

interface CardProps {
  book: Book;
}

const Card: React.FC<CardProps> = ({ book }) => {
  const [bookDetail, setBookDetail] = useState<Book | null>(null);

  const handleClick = (selectedBook: Book) => {
    setBookDetail(selectedBook);
  };

  const closeModal = () => {
    setBookDetail(null);
  };

  return (
    <>
      <div
        className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden cursor-pointer"
        onClick={() => handleClick(book)}
      >
        <a href="#">
          <img className="w-full h-auto object-cover p-8 rounded-t-lg" src={book.coverImage} alt={book.title} />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {book.title}
            </h5>
          </a>
          <div className="flex items-center justify-between mt-1 mb-3">
            <p className="font-bold text-red-500">{book.discountRate} %</p>
            <p className="font-bold flex items-center">
               {book.price} ₩
            </p>
          </div>
        </div>
      </div>
      {bookDetail && (
        <BookDetails books={bookDetail} open={true} setOpen={closeModal} />
      )}
    </>
  );
};

export default Card;
