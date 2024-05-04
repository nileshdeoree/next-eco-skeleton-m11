import React, { useContext } from 'react';

const CheckoutPage = ({ clearCart, cart, subTotal }) => {

  const handlePay = async () => {
    try {
      const response = await fetch('/api/addorders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.values(cart))
      });

      if (response.ok) {
        alert('Orders added successfully');

        const response = await fetch('/api/deleteproducts', {
          method: 'DELETE',
          headers: {
            'content-Type': 'application/json'
          },
          body: JSON.stringify(Object.keys(cart).map( key => ( { _id : key} )))
        })

        clearCart()

      } else {
        console.error('Error adding orders');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Subtotal: {subTotal}</h1>

      <button onClick={handlePay}>Pay</button>
    </div>
  );
};

export default CheckoutPage;
