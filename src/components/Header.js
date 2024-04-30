import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../Store/Slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.auth);
  const { error } = useSelector((state) => state.book);

  return (
    <>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <nav className='navbar navbar-dark bg-dark'>
        <span className='navbar-brand mb-0 h1'>My Books</span>

        <button className='btn btn-outline-primary' type='submit' onClick={() => {
          dispatch(logOut())
        }}>
          {isLogin ? 'Log Out' : 'Log In'}
        </button>
      </nav>
    </>
  );
};

export default Header;
