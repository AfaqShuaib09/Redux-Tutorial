import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "store/cartSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      console.log(data);
    };
    fetchProducts();
  }, []);

  const handleCart = (product) => {
    console.log(product);
    dispatch(addToCart(product));
  };

  const renderProducts = () => {
    return products.map((product, index) => {
      return (
        <div className="col-12 col-md-2 col-lg-3 mb-3 justify-content-center" key={product.id}>
          <div className="">
            <div className="card p-3">
              <div className="d-flex justify-content-center">
                <img
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={150}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  {product.description.substring(0, 50)}...
                </p>
                <p className="card-text">${product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleCart(product)} >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="products mt-4 mx-4">
      <div className="row">
        {products ? renderProducts() : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Products;
