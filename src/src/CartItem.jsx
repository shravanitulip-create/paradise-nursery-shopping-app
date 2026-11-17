
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} from './CartSlice';

import { Navbar } from './ProductList';

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  // Calculate total cart amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate total number of plants
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Increase quantity
  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  // Decrease quantity
  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  // Delete item
  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  // Checkout message
  const handleCheckout = () => {
    alert('Thank you for shopping with Paradise Nursery! Checkout Coming Soon.');
  };

  return (
    <div>
      {/* Navigation bar */}
      <Navbar />

      <div style={{
        padding: '35px 5%',
        backgroundColor: '#f5f8f2',
        minHeight: '100vh'
      }}>

        <h1 style={{
          textAlign: 'center',
          color: '#245c35',
          marginBottom: '30px'
        }}>
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (

          // Empty cart
          <div style={{
            textAlign: 'center',
            padding: '50px 20px',
            backgroundColor: 'white',
            borderRadius: '12px'
          }}>
            <h2>Your cart is empty!</h2>

            <p style={{ margin: '15px 0' }}>
              Looks like you haven't added any plants yet.
            </p>

            <Link to="/plants">
              <button style={{
                backgroundColor: '#388e3c',
                color: 'white',
                padding: '12px 25px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}>
                Continue Shopping
              </button>
            </Link>
          </div>

        ) : (

          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '25px'
          }}>

            {/* Cart product list */}
            <div>
              {cartItems.map((item) => (

                <div key={item.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  backgroundColor: 'white',
                  padding: '20px',
                  borderRadius: '12px',
                  marginBottom: '18px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  flexWrap: 'wrap'
                }}>

                  {/* Plant thumbnail */}
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '120px',
                      height: '120px',
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                  />

                  {/* Plant details */}
                  <div style={{ flex: 1 }}>
                    <h3>{item.name}</h3>

                    <p style={{ color: '#666', margin: '8px 0' }}>
                      Unit Price: ₹{item.price}
                    </p>

                    <p style={{
                      color: '#245c35',
                      fontWeight: 'bold'
                    }}>
                      Total: ₹{item.price * item.quantity}
                    </p>
                  </div>

                  {/* Quantity controls */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>

                    <button
                      onClick={() => handleDecrease(item.id)}
                      disabled={item.quantity <= 1}
                      style={{
                        padding: '7px 13px',
                        cursor: item.quantity <= 1
                          ? 'not-allowed'
                          : 'pointer'
                      }}
                    >
                      −
                    </button>

                    <span style={{ fontWeight: 'bold' }}>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => handleIncrease(item.id)}
                      style={{
                        padding: '7px 13px',
                        cursor: 'pointer'
                      }}
                    >
                      +
                    </button>

                  </div>

                  {/* Delete button */}
                  <button
                    onClick={() => handleDelete(item.id)}
                    style={{
                      backgroundColor: '#e53935',
                      color: 'white',
                      padding: '9px 15px',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    Delete
                  </button>

                </div>
              ))}
            </div>

            {/* Cart summary */}
            <div style={{
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '12px',
              height: 'fit-content',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}>

              <h2 style={{
                color: '#245c35',
                marginBottom: '20px'
              }}>
                Cart Summary
              </h2>

              <p style={{ marginBottom: '15px' }}>
                Total Items: <strong>{totalItems}</strong>
              </p>

              <hr />

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '20px 0',
                fontSize: '18px'
              }}>
                <strong>Total Amount:</strong>
                <strong style={{ color: '#245c35' }}>
                  ₹{totalAmount.toFixed(2)}
                </strong>
              </div>

              {/* Checkout */}
              <button
                onClick={handleCheckout}
                style={{
                  width: '100%',
                  padding: '13px',
                  backgroundColor: '#388e3c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  marginBottom: '15px'
                }}
              >
                Checkout
              </button>

              {/* Continue shopping */}
              <Link to="/plants" style={{
                display: 'block',
                textAlign: 'center',
                padding: '12px',
                color: '#245c35',
                border: '1px solid #245c35',
                borderRadius: '6px',
                textDecoration: 'none'
              }}>
                Continue Shopping
              </Link>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default CartItem;
