import React from 'react';
import { useSelector } from 'react-redux';

const BooksList = ({ isLoading, book, dispatch, deletebook, getbookid }) => {
  const { isLogin } = useSelector((state) => state.auth);
  const bookList = book ? book.map((item) => (
    <li className='list-group-item d-flex  justify-content-between align-items-center' key={item.id}>
      <div>{item.title}</div>
      <div className='btn-group' role='group'>
        <button type='button' className='btn btn-primary' disabled={!isLogin} onClick={() => { getbookid(item.id) }}>
          Read
        </button>
        <button type='button' className='btn btn-danger' disabled={!isLogin} onClick={() => { dispatch(deletebook(item.id)) }}>
          Delete
        </button>
      </div>
    </li>

  )) : 'there is no books'
  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? ('loading...') : (
        <ul className='list-group'>
          {bookList}
        </ul>)}


    </div>
  );
};

export default BooksList;

