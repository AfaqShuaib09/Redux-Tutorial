import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "store/cartSlice";
import { fetchProductsAsync } from "store/productSlice";
import { useSelector } from "react-redux";
import { STATUSES } from "store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  const handleCart = (product) => {
    console.log(product);
    dispatch(addToCart(product));
  };

  if (status === STATUSES.LOADING) {
    return <p className="text-center">Loading...</p>;
  }

  if (status === STATUSES.FAILED) {
    return <p className="text-center">Failed to load products</p>;
  }

  const renderProducts = () => {
    return products.map((product, index) => {
      return (
        <div
          className="col-12 col-md-2 col-lg-3 mb-3 justify-content-center"
          key={index}
        >
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
                  onClick={() => handleCart(product)}
                >
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
