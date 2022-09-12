import React from 'react'
import Products from 'components/Products'

const Home = () => {
  return (
    <div>
        <p className='fs-3 fw-bold text-center'> Welcome to the Redux Toolkit store </p>
        <section>
            <p className='fs-5 fw-bold ms-4'>Products</p>
            <Products>
            </Products>
        </section>
    </div>
  )
}

export default Home;
