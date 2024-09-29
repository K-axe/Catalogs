import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, setCategory, fetchProducts } from './app/features/productSlice';
import "./CategoryInfo.css"

const CategoryInfo = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.products.categories);
  const selectedCategory = useSelector(state => state.products.selectedCategory);


  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);


  const handleCategoryChange = (e) => {
    const category = e.target.value;
    console.log(category)
    dispatch(setCategory(category)); 
    dispatch(fetchProducts({ category, skip: 0 }));
  };

    
  return (
    <div className='CategoryInfo'>
      <select value={selectedCategory} onChange={handleCategoryChange}>
      <option value="">All Categories</option>
      {categories.map((category) => (
     <option key={category} value={category}>{category}</option>
      ))}
    </select>
    </div>
  )
}

export default CategoryInfo