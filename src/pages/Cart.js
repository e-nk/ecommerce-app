import React, { useContext } from 'react';
import CartItem from '../components/CartItem/CartItem';
import { StateContext } from '../context/GlobalState';
import StripeCheckout from 'react-stripe-checkout';

function Cart() {
  // consuming contexts
  const { total, cartItems, totalItems, resetCart } = useContext(StateContext);

  // handle checkout
//   const handleCheckout = (token) => {
//     const amount = total * 100; // convert to cents
//     const stripe = window.Stripe('pk_test_51MrL2nBvyxhYJyMHh4mvUj6DPtgjON6W3aA9REJpQtVCUdmyqcVqpCwO0K78cHVibtStyPTJ15b6A7QmPoqQeZbp006Dn7zSRg');

//     stripe
//       .redirectToCheckout({
//         lineItems: [
//           {
//             price: 'price_1J54bRJbuVxvZ8zPLThV7OkF',
//             quantity: 1,
//           },
//         ],
//         mode: 'payment',
//         successUrl: `${window.location.origin}/success`,
//         cancelUrl: `${window.location.origin}/cart`,
//         customerEmail: token.email,
//         submitType: 'pay',
//       })
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

        // handle checkout
// const handleCheckout = async (token) => {
//     const amount = total * 100; // convert to cents
//     const stripe = window.Stripe('pk_test_51MrL2nBvyxhYJyMHh4mvUj6DPtgjON6W3aA9REJpQtVCUdmyqcVqpCwO0K78cHVibtStyPTJ15b6A7QmPoqQeZbp006Dn7zSRg');
  
//     try {
//       const { error } = await stripe.redirectToCheckout({
//         lineItems: [
//           {
//             price_data: {
//               currency: 'usd',
//               product_data: {
//                 name: 'Total amount',
//               },
//               unit_amount: amount,
//             },
//             quantity: 1,
//           },
//         ],
//         mode: 'payment',
//         successUrl: `${window.location.origin}/success`,
//         cancelUrl: `${window.location.origin}/cancel`,
//         customerEmail: token.email,
//       });
  
//       if (error) {
//         console.error(error);
//       } else {
//         // Payment succeeded
//         //resetCart(); // Clear the cart
//         window.location.reload();
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
  // handle checkout
const handleCheckout = async (token) => {
  const amount = total * 100; // convert to cents
  const stripe = window.Stripe('pk_test_...');

  try {
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Total amount',
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
      customerEmail: token.email,
    });

    if (error) {
      console.error(error);
    } else {
      // Payment succeeded
      localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Save cart items to local storage
      window.location.reload();
    }
  } catch (error) {
    console.error(error);
  }
};


  // render JSX
  return (
    <>
      <section className="cart-section">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        <div className="summary-detail">
          <div className="items">
            {totalItems === 0 ? (
              <h4 className="warn-txt">No Item in Cart!</h4>
            ) : (
              <h4>Total Items: {totalItems}</h4>
            )}
          </div>
          <div className="amounts">
            <h4>Total Amount: {total}</h4>
          </div>
          {totalItems > 0 && (
            <>
              <StripeCheckout
                stripeKey="pk_test_51MrL2nBvyxhYJyMHh4mvUj6DPtgjON6W3aA9REJpQtVCUdmyqcVqpCwO0K78cHVibtStyPTJ15b6A7QmPoqQeZbp006Dn7zSRg"
                name="EasyShop"
                description={`Total Amount: ${total}`}
                amount={total * 100} // convert to cents
                currency="KES"
                token={handleCheckout}
              />
              {/* <button onClick={() => resetCart()} className="reset">
                Reset
              </button> */}
              <button id="reset-btn" className="reset" onClick={resetCart}>Reset Cart</button>

            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Cart;
