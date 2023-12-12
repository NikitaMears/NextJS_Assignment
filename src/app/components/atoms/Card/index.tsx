'use client';
import React, { useState } from 'react';
import { Book } from '../../../types/Book';
import Link from 'next/link';
import BookDetails from '../../detail-page';

interface CardProps {
  book: Book;
}
{/* <Link href={{ pathname: 'about', query: { name: 'leangchhean' } }}> */}


const Card: React.FC<CardProps> = ({ book }) => {
  const [bookDetail,setBookDetail]=useState<Book>({} as Book)
  const [showDetails,setShowDetails]=useState(false)
    const handleClick=(books:Book)=>{
        setBookDetail(books)
        setShowDetails(prev=>!prev)
    }
  return (
    <>
    <div className="bg-white p-4 rounded shadow-md">
        <h1>{book.title}</h1>
        {/* <Link href={{pathname:'detail', query:{books:book}}}> */}
      <img src={book.coverImage} alt={book.title} className="w-full h-auto" />
        {/* </Link> */}
        <button onClick={()=>handleClick(book)}>Details</button>
      <h3 className="text-xl font-bold">{book.title}</h3>
      <p>Discount rate: {book.discountRate}</p>
      <p>Price: {book.price}</p>
    </div>
    <BookDetails books={bookDetail} open={showDetails} setOpen={setShowDetails}/>
    </>
  );
  
};

export default Card;
