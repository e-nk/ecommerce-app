import React, { useContext, useEffect, useState } from 'react';
import { StateContext } from '../context/GlobalState';

function Orders() {
  const [cartItems, setCartItems] = useState([]);
  const { total } = useContext(StateContext);

  useEffect(() => {
    const items = localStorage.getItem('cartItems');
    if (items) {
      setCartItems(JSON.parse(items));
    }
  }, []);

  useEffect(() => {
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
    googleMapsScript.async = true;
    window.document.body.appendChild(googleMapsScript);

    return () => {
      window.document.body.removeChild(googleMapsScript);
    };
  }, []);

  useEffect(() => {
    if (window.google && window.google.maps) {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -1.3052, lng: 36.7855 },
        zoom: 14,
      });

      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer({
        map,
      });

      directionsService.route(
        {
          origin: 'Ngong Road, Nairobi, Kenya',
          destination: 'CBD, Nairobi, Kenya',
          travelMode: 'DRIVING',
        },
        (response, status) => {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        }
      );
    }
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Your Orders</h1>
      <h2 className="my-4">Total Amount: {total}</h2>
      <div className="row">
        <div className="col-lg-8 text-center">
          {cartItems.map((item) => (
            <div className="card mb-3" key={item.id}>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Price: {item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
  <div className="col-lg-6">
    <div id="map" style={{ height: '400px', marginBottom: '20px' }}></div>
  </div>
  <div className="col-lg-6">
    <div className="text-left">
      <p>Delivery address:</p>
      <form>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="address" />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" className="form-control" id="city" />
        </div>
        <button type="submit" className="btn btn-primary"> Place Order
              </button>
 
        {/* ... */}
      </form>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
export default Orders;
              
