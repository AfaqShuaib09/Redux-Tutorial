import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeFromCart } from 'store/cartSlice'

const Cart = () => {
    const items = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // if item is in cart, add 1 to quantity
    const cartItems = items.map((item) => {
        return {
            ...item,
            quantity: items.filter((i) => i.id === item.id).length
        }
    })

    // filter out duplicate items
    const uniqueItems = cartItems.filter((item, index) => {
        return cartItems.findIndex((i) => i.id === item.id) === index
    })

    const handleRemove = (item) => {
        console.log(item);
        dispatch(removeFromCart(item.id));
    }
  return (
    <div>
        <p className='fs-3 fw-bold text-center'> Cart </p>
        <div className='cartWrapper'>
            {uniqueItems.map((item) => (
                <div className='cartItem bg-light p-3 mx-5 my-3 rounded' key={item.id}>
                    <div className='cartItem row'>
                        <div className='col-3 d-flex justify-content-center'>
                            <img src={item.image} alt={item.title} width={150} height={100} />
                        </div>
                
                        <div className='cartItemDetails col-3'>
                            <p className='fs-6 mt-5'>{item.title}</p>
                        </div>
                    
                        <div className='cartItemPrice col-2'>
                            <p className='fs-6 mt-5'>${item.price}</p>
                        </div>

                        <div className='col-2 d-flex justify-content-end p-5'>
                            <button className='btn btn-danger' onClick={() => handleRemove(item)}>Remove</button>
                        </div>

                        <div className='col-2 d-flex justify-content-end'>
                            <p className='fs-6 mt-5'>Quantity: {item.quantity}</p>
                        </div>
                    
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Cart;
