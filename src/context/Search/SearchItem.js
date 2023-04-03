import React, { useState } from "react";
import ProductItem from '../../components/Product/ProductItem'



function Search({ products }) {
  const [searchQuery, setSearchQuery] = useState("");
  console.log("*******")
  console.log(products);

  const [searchResults, setSearchResults] = useState(products);
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (!products) {
      return [];
    }
    let results = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.name.toLowerCase().includes(searchQuery.toLowerCase()) 
        //product.price.toString().includes(searchQuery)
      );
    });
    setSearchResults(results);
  };
  return (
    <div id="search">
      <input
        //class="position-absolute top-50 start-50"
        type="text"
        placeholder="Search products"
        onChange={handleSearch}
        className="input position-absolute top-4 start-50 translate-middle rounded-pill border-primary"
      />
      <section className="products">
        {searchResults.map((product) => (
          <ProductItem key={product.id} product={product}/>
        ))}
      </section>
    </div>
  );
}
export default Search;