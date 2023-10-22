import './App.css';
import {useEffect, useState} from "react";
import {Product} from "./Components/Product/product";
import {Cart} from "./Components/Cart/cart";

function App() {
  const [products,setProducts] = useState([]);
  const [error,setError] = useState(null);
  const [minPrice,setMinPrice] = useState(0);
  const [maxPrice,setMaxPrice] = useState(0);
  const [cartItems,setCartItems] = useState([]);

  const filterProducts = () => {
      const filterredProducts = products.filter((product) => {
          const price = product.price;

          if ((minPrice === 0 || price >= minPrice)&&(maxPrice === 0 || price <= maxPrice)) return true;
          return false;
      });
      return filterredProducts;
  };

  const addToCart = (product) => {
      const existingItem = cartItems.find((item) => item.id ===product.id);
      if (existingItem) {
          setCartItems(products.map(item => item.id === product.id ? {...item,quantity:item.quantity+1} : item))
      }
      else setCartItems([...cartItems,{...product,quantity: 1}])
  }

  useEffect(()=>{
    fetch('https:/dummyjson.com/products')
        .then(response => response.json())
        .then(data => setProducts(data.products))
        .catch(error => setError(error));
  },[]);
  return (
    <div className="App">
      <label>
          Min Price
          <input type="number" value={minPrice} onChange={(event) => setMinPrice(parseFloat(event.target.value))}/>
      </label>
      <label>
          Max Price
          <input type="number" value={maxPrice} onChange={(event) => setMaxPrice(parseFloat(event.target.value))}/>
      </label>
      <div>
        {
          filterProducts().map((item,index) => (
              <Product key={item.id} product={item} addCart={() => {addToCart(item)}}/>
          ))
        }
      </div>
      {error && <p>Something went wrong!</p>}
        <Cart cartItems={cartItems}/>
    </div>
  );
}

export default App;
