import React from 'react';
import { Link } from 'react-router-dom';
import   "../assets/home.css"

function Home() {
  return (
    <div className="home-container">
      
      <div className="home-features">
        <div className="feature">
        {/* <a href="https://example.com/image.jpg">View image</a> */}
        </div>        
      </div>
      <main>
      <section class="container">
        <div class="info">
          <span class="subtitle"> Your Trusted Store </span>
          <h1>Welcome To EasyStore</h1>
          <span class="subtitle">
  Our ecommerce store is designed to cater to all your fashion needs, with a vast selection of products that are constantly updated to keep up with the latest trends. We strive to offer our customers a seamless shopping experience that is both enjoyable and convenient.
Our website is designed to be user-friendly, with a clean and modern layout that makes it easy to navigate and find what you're looking for.
Happy shopping!
          </span>
          <div >      
        <Link to="/login" className="btn btn-primary">
          Get Started
        </Link>
      </div>
        </div>
        <div class="ilustration">
            <img src="https://images.pexels.com/photos/1113554/pexels-photo-1113554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="shoes"></img>
        </div>
        {/* <div class="ilustration">
            <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="shoes"></img>
        </div> */}
      </section>
      
    </main>
    </div>
  );
}

export default Home;