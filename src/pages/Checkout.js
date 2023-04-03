import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const [product] = useState({
    name: 'Your Product Name',
    price: price,
    description: 'Your Product Description',
  });

  const handleToken = (token) => {
    console.log(token);
    // Here you can make a server-side API call to create a charge or a payment intent
  };

  return (
    <StripeCheckout
      stripeKey="YOUR_STRIPE_PUBLIC_KEY"
      token={handleToken}
      amount={product.price * 100}
      name={product.name}
      description={product.description}
      billingAddress
      shippingAddress
      image="https://your-logo-url.com"
      currency="USD"
      panelLabel="Pay Now"
    >
      <button className="btn btn-primary">Pay Now</button>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;
