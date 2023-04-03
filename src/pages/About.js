import React from "react";

import '../assets/about.css'


function About (){
    return(
        <section class="about" id="about">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
                  <h2>About us</h2><br></br>
          </div>
         </div>
       <div class="row">
         <div class="col-xs-12 col-sm-4">
           <h4>Our Project</h4>
           <p>We use ReactJS, Bootstrap, and CSS to provide you with an easy-to-use and visually appealing shopping experience. Our website is designed to be user-friendly, with a clean and modern layout that makes it easy to navigate and find what you're looking for. At our store, we believe that fashion should be accessible to everyone, which is why we offer a wide range of products at affordable prices. We want to make sure that everyone can look and feel their best without breaking the bank.</p>
           
         </div>
         <div class="col-xs-12 col-sm-4">
           <h4>Our mission</h4>
           <p>Our mission is to provide our customers with high-quality and stylish clothing, shoes, and bags at affordable prices. We aim to create a seamless shopping experience for our customers, with exceptional customer service and a wide selection of products that are constantly updated to reflect the latest trends. We believe that everyone deserves to look and feel their best, and we strive to make fashion accessible to all. We are committed to sustainability and ethical practices, and we work with suppliers who share our values. Our goal is to exceed our customers' expectations and become their go-to destination for all their fashion needs.</p>
           
         </div>
         
       </div>
        </div>	
        
    </section> 
    

    
    )
}

export default About;