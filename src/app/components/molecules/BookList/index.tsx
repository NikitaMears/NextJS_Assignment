'use client';
import React, { useMemo } from 'react';
import Card from '../../atoms/Card';
import { Book } from '@/app/types/Book';
import { useGetBookListQuery } from '@/app/(main)/booklist/booklist.query';



const BookList = () => {
    const pageNumber=1;
    const {data}=useGetBookListQuery(pageNumber)

    const books=useMemo(()=>data?.data, [data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books?.map((book) => (
        <Card key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
