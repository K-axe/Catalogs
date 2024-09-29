import React, { useEffect, useState } from 'react'

import ProductCard from './ProductCard';
import "../src/CatalogArea.css";
import {useDispatch,useSelector} from "react-redux";
import { fetchProducts,incrementSkip } from './app/features/productSlice';

const CatalogArea = () => {
   

  const dispatch = useDispatch();
  const items = useSelector(state => state.products.products);
  const skip = useSelector(state => state.products.skip);
  const selectedCategory = useSelector(state => state.products.selectedCategory);
  const searchTerm = useSelector(state => state.products.searchTerm);
    
  useEffect(() => {
    
    dispatch(fetchProducts({ category: selectedCategory, searchTerm, skip: 0}));
  }, [dispatch, selectedCategory, searchTerm]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        dispatch(incrementSkip());
        dispatch(fetchProducts({ category: selectedCategory, searchTerm, skip }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch, skip, selectedCategory, searchTerm]);


    
  return (
   <div className='CatalogArea'>
    {console.log(items)}
    {
        items.map((item,index) =>(
            <ProductCard key={item.id -index} thumbnail={item.thumbnail} title={item.title} price={item.price} discountPercentage={item.discountPercentage}/>
        ))
    }
   </div>
  )
}

export default CatalogArea;