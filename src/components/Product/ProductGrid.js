import React, {useContext} from 'react'
import { StateContext } from '../../context/GlobalState'
import './product.css'
import Search from '../../context/Search/SearchItem'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
function ProductGrid() {
    

    const {products} = useContext(StateContext)
  console.log(products)
    
    return(
        <div>
            {products && products.length > 0 && (<Search products={products? products:<Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open>
  <CircularProgress color="inherit" />
</Backdrop>}
            />) }

            
        </div>
    ) 
}

export default ProductGrid
