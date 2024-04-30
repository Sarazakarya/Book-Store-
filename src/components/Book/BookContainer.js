import React, { Fragment, useEffect, useState } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';


import './book.css';
import { useDispatch, useSelector } from 'react-redux';
import { getbooks } from '../../Store/Slices/BookSlice';
import { deletebook } from './../../Store/Slices/BookSlice';

const PostContainer = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const { isLoading, book } = useSelector((state) => state.book)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getbooks())
  }, [dispatch])

  function getbookid(id) {
    const selectedbooks = book.find((ele) => ele.id === id);
    setSelectedBook((prv) => {
      return { ...prv, ...selectedbooks }
    })

  }
  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList isLoading={isLoading} book={book} dispatch={dispatch} deletebook={deletebook} getbookid={getbookid} />
        </div>
        <div className='col side-line'>
          <BookInfo info={selectedBook} />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
