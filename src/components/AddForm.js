import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inserbook } from '../Store/Slices/BookSlice';

const Addform = () => {

  const title = useRef(null);
  const description = useRef(null);
  const price = useRef(null);

  const dispatch = useDispatch();

  function handleform(e) {
    e.preventDefault();
    const data = {
      title: title.current.value,
      Description: description.current.value,
      price: price.current.value,
    }
    dispatch(inserbook(data))
    title.current.value = null;
    description.current.value = null;
    price.current.value = null;
  }


  const { isLogin } = useSelector((state) => state.auth);
  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={handleform}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input type='text' className='form-control' id='title' ref={title} required />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='number' className='form-control' id='price' ref={price} required />
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              className='form-control'
              id='Description'
              rows='3'
              ref={description}
              required
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary' disabled={!isLogin}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
