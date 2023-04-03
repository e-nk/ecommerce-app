import React, {useContext} from 'react'
import { StateContext } from '../../context/NewStatey'
import {useParams} from 'react-router-dom'

function NewArrivalDetail() {
    // consuming contexts
    const {addToCart} = useContext(StateContext)

    // get id of current product
    const {productId} = useParams()
    console.log(typeof productId)

    // fetch all products data
    const {products} = useContext(StateContext)
    console.log(products)
    // filter the product with matching id
    const thisProduct = products.filter(product => Number(product.id )=== Number(productId))
    
    // render JSX
    return (
        // map all information of that specific product
        <section>
            {
                thisProduct.map(product => {
                    return(
                        <div key={product.id} className="product-detail">
                            <div className="product-detail-image">
                                <img src={product.image_url} alt="product" />
                            </div>
                            <div className="product-detail-info">
                                <h3>{product.name}</h3>
                                <h3>{product.category}</h3>
                                <h3>{product.price}</h3>
                                {/* <h4>${product.price}</h4> */}
                                <p className="lead">{product.description}</p> 
                                
                                <button onClick={() => addToCart(product)} className="add-cart-btn">Add to Cart</button> 
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default NewArrivalDetail
