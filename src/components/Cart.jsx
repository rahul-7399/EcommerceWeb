import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../feature/cartslice";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [setQty] = useState(1);

  const calculateSubtotal = (item) => {
    return item.price.toFixed(2) * item.quantity;
  };

  const calculateQty = (item) => {
    return item.quantity;
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + calculateSubtotal(item), 0);
  };
  useEffect(
    () => localStorage.setItem("cartItems", JSON.stringify(cart)),
    [cart]
  );

  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart items - {cart.length} </h5>
                </div>
                <div className="card-body">
                  {cart.map((item) => (
                    <div className="row" key={item.id}>
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        {/* Image */}
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src={item.image}
                            className="w-100"
                            alt="Blue Jeans Jacket"
                          />
                          <a href="#!">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            />
                          </a>
                        </div>
                        {/* Image */}
                      </div>
                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        {/* Data */}
                        <p>
                          <strong>{item.title}</strong>
                        </p>
                        <p>{item.description.slice(0, 25)}...</p>
                        <p>Category : {item.category} </p>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm me-1 mb-2"
                          data-mdb-toggle="tooltip"
                          title="Remove item"
                          onClick={() => dispatch(removeFromCart(item))}
                        >
                          <i className="fas fa-trash" />
                        </button>

                        {/* Data */}
                      </div>
                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                          <button
                            className="btn btn-primary px-3 me-2"
                            onClick={() => dispatch(decrementQty(item))}
                          >
                            <i className="fas fa-minus" />
                          </button>
                          <div className="form-outline">
                            <input
                              id="form1"
                              min={0}
                              name="quantity"
                              onChange={(e) =>
                                setQty(item.quantity + e.target.value)
                              }
                              value={item.quantity}
                              type="text"
                              className="form-control"
                            />
                          </div>
                          <button
                            className="btn btn-primary px-3 ms-2"
                            onClick={() => dispatch(incrementQty(item))}
                          >
                            <i className="fas fa-plus" />
                          </button>
                        </div>

                        <p className="text-start text-md-center">
                          <strong> Price : &#8377; {item.price} </strong>
                          <strong>Item :{calculateQty(item)}</strong>
                        </p>
                      </div>
                    </div>
                  ))}
                  <hr className="my-4" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>{calculateTotalPrice()}</strong>
                      </span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
