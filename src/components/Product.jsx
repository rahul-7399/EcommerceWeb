import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../feature/cartslice";
import { useNavigate } from "react-router-dom";
import { STATUS, fetchProduct } from "../feature/productSlice";

const Product = () => {
  const { cart } = useSelector((state) => state.cart);
  const { data, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  if (status === STATUS.LOADING) {
    return <h2>Loading....</h2>;
  }
  return (
    <>
      <div className="home-container">
        <h1 className="header-name">Shopping</h1>
        <div className="home-inner">
          {data.map((item) => {
            return (
              <div className="product-card" key={item?.id}>
                <div className="product-image">
                  <img
                    src={item?.image}
                    alt={item?.title}
                    className="hide-bg"
                  />
                </div>
                <div>{item?.title.slice(0, 20)}... </div>
                <div className="price">
                  Price : &#8377; {item?.price.toFixed(2)}
                </div>
                <div>
                  {cart.some((p) => p.id === item.id) ? (
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate("/cart")}
                    >
                      Checkout
                    </button>
                  ) : (
                    <button
                      onClick={() => dispatch(addTocart(item))}
                      className="btn btn-primary"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
