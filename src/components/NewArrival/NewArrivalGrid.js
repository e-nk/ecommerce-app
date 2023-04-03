import React, { useContext } from 'react';
import { StateContext } from '../../context/GlobalState';
import './NewArrival.css';
import Search from '../../context/Search/SearchItem';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

function NewArrivalGrid() {
  const { products } = useContext(StateContext);

  
    // Render loading state while `products` is not initialized yet
    return (
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

export default NewArrivalGrid;
