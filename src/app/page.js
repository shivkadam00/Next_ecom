"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {add} from './Redux/cartSlice'

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getproduct = async () => {
      const responce = await fetch("https://fakestoreapi.com/products");
      const data = await responce.json();
      setProducts(data);
    };
    getproduct();
  }, []);

  const  handleAdd = (product) =>{
    dispatch(add(product))
  }
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt="image"/>
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={()=> handleAdd(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
