import React from "react";
import { useState, useEffect } from 'react';

import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import API from '../utils/API';


const Home = () => {
  const [result, setResult] = useState({});

  const searchGame = () =>
  API.search()
    .then((res) => {
      // console.log(res.data)
      setResult(res.data)})
    .catch((err) => console.log(err));
    useEffect(() => {
      searchGame();
    }, []);
  return (
    <div class="content" className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
