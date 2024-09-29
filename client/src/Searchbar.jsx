import React from 'react'
import "../src/Searchbar.css"
import { useDispatch } from 'react-redux';
import { setSearchTerm, fetchProducts } from './app/features/productSlice';



const Searchbar = () => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    dispatch(setSearchTerm(searchTerm));
    dispatch(fetchProducts({ searchTerm, skip: 0 }));
  };
  return (
    <div className='Searchbar'>
      
         
         <input type="text" placeholder="Search..." onChange={handleSearch}/>
         
    </div>
    
  )
}

export default Searchbar;