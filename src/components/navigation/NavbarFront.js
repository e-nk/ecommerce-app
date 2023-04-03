import React from "react";
import { Link } from 'react-router-dom';


import './navbar.css'
import './header.css'



function NavbarFront(){


    return(
        
            <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="dark">
                <div className="container-fluid">
                    <ul className="nav nav-pills mb-3 fs-3">
                        <li className="nav-item nav-pills ms-3 custom-link">
                            <Link to= "/home">Home</Link>
                        </li>
                        <li className="nav-item nav-pills ms-3 custom-link">
                            <Link to= "/about">About</Link>
                        </li>
                    
                        {/* <li className="nav-item ms-3 custom-link">
                            <Link to= "register">Signup</Link>
                        </li> */}
                    </ul>
                </div>
                <ul className="nav-icons">
                <li >
                    <Link to= "/login">Login<i class="ri-login-circle-line"></i></Link>
                </li>
                </ul>
                {/* <div>
                    <nav>
                    <Link className="nav-link active" aria-current="page" to="/login">
                Login/Signup
              </Link>
                    </nav>

                </div> */}
            </nav>
         
       
    )
}

export default NavbarFront;