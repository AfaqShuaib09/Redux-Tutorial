import React from 'react'
import Products from 'components/Products'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  return (
    <div>
        <p className='fs-3 fw-bold text-center'> Welcome to the Redux Toolkit store </p>
        <section>
            <p className='fs-5 fw-bold ms-4'>Products</p>
            <Products>
            </Products>
        </section>
        <ToastContainer />
    </div>
  )
}

export default Home;
