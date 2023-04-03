import React, {useContext} from 'react'
import { StateContext } from '../../context/GlobalState'
import {Link} from 'react-router-dom'
import './header.css'

function Navbar() {
    // consuming context
    const {totalItems, favoriteItems} = useContext(StateContext)

    // render JSX
    return (
        <nav>
            <div className="logo">
                    <Link to='/products'>EasyShop</Link>
            </div>
            <div className="container-fluid">
                <ul className="nav-items">
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/new-arrivals'>New Arrivals</Link></li>
                    <li><Link to='/orders'>Orders</Link></li>
                    
                </ul>
            </div>
            <div className="nav-items">
                <ul className="nav-icons">
                    <li>
                        <Link to='/wishlist'>
                            <i class="ri-heart-add-line"></i>
                            <span className="item-count">{favoriteItems.length}</span> 
                        </Link>
                    </li>
                    <li> 
                        <Link to='/cart'><i class="ri-shopping-cart-line"></i>
                            <span className="item-count">{totalItems}</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/logout'><i class="ri-logout-circle-r-line"></i></Link>
                    </li>
                </ul>
            </div>

        </nav>
            
    )
    
}

export default Navbar;
