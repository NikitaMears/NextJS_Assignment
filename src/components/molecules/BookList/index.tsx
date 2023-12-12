'use client';
import React, { useMemo } from 'react';
import Card from '../../atoms/Card';
import { Book } from '../../../types/Book';
import { useGetBookListQuery } from '../../../hooks/bookList.query';
import styles from './bookList.module.css'; // Import the CSS file

const BookList = () => {
  const pageNumber = 1;
  const { data } = useGetBookListQuery(pageNumber);

  const books = useMemo(() => data?.data, [data]);

  return (
    <div className={`${styles.bookList} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
      {books?.map((book: Book) => (
        <Card key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
