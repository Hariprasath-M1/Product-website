import React, { useEffect, useReducer, useState } from 'react';
import { useProduct } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import './css/Product.css';
import productReducer from '../Reducer/ProductReducer';

function Product() {
  const { products } = useProduct();
  const { cartItem, setCartItems } = useCart();
  const [searchText, setSearchText] = useState("");
  const [filterCategories, setFilterCategories] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [filterProduct, dispatch] = useReducer(productReducer, []);

  useEffect(() => {
    dispatch({ type: "addProduct", payload: products });
    const categories = products.map(product => product.category);
    setFilterCategories(categories.reduce((acc, ele) => {
      if (!acc.includes(ele)) {
        acc.push(ele);
      }
      return acc;
    }, []));
  }, [products]);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchText) {
        dispatch({ type: "search", payload: { searchText: searchText.toLowerCase(), products: products } });
      } else {
        dispatch({ type: "addProduct", payload: products });
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText, products]);

  useEffect(() => {
    if (filterValue) {
      dispatch({
        type: "filter", payload: { filterValue, products }
      });
    } else {
      dispatch({ type: "addProduct", payload: products });
    }
  }, [filterValue, products]);

  function addToCartHandler(item) {
    const isItemAvailable = cartItem.find(product => product.id === item.id);
    if (isItemAvailable) {
      const newCartItem = cartItem.map(product => {
        if (product.id === item.id) {
          return { ...product, count: product.count + 1 };
        }
        return product;
      });
      setCartItems(newCartItem);
    } else {
      const newItem = { ...item, count: 1 };
      setCartItems([...cartItem, newItem]);
    }
  }

  return (
    <>
      <main className='product-page'>
        <aside className='product-aside'>
          <div className='search'>
            <label htmlFor="search">Search</label>
            <input
              type="search"
              name="search"
              id="search"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
          </div>
          <div className="filter">
            <h1>Filter Products:</h1>
            <select
              name="filter"
              id="filter"
              onChange={(e) => setFilterValue(e.target.value)}
              value={filterValue}
            >
              <option value="">All Products</option>
              {
                filterCategories.map(category => (
                  <option value={category} key={category}>{category}</option>
                ))
              }
            </select>
            <div className="sort">
             <h1>Sort</h1>
             <select name="sort" id="sort">
             <option value="all">All</option>
              <option value="a-z">A-Z</option>
              <option value="h-l">High to Low(price)</option>
              <option value="l-h">Low to High(price)</option>
             </select>
            </div>
          </div>
        </aside>
        <section className='products'>
          {filterProduct.map(product => (
            <div className='card' key={product.id}>
              <img src={product.images[0]} alt="product" />
              <h2>{product.title}</h2>
              <h3>{product.brand}</h3>
              <div className='buttons'>
                <button>Buy Now</button>
                <button onClick={() => addToCartHandler(product)}>Add To Cart</button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Product;
