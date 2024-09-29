import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
  const response = await axios.get('https://dummyjson.com/products/category-list');
  return response.data; 
});

// Fetch products based on selected category, search term, and pagination using Axios
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ category, searchTerm, skip }) => {
    let url = `https://dummyjson.com/products?limit=10&skip=${skip}`;

    if (category) {
      url = `https://dummyjson.com/products/category/${category}?limit=10&skip=${skip}`;
    }
    if (searchTerm) {
      url = `https://dummyjson.com/products/search?q=${searchTerm}&limit=10&skip=${skip}`;
    }

    const response = await axios.get(url);
    return response.data; 
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    categories: [],
    products: [],
    selectedCategory: '',
    searchTerm: '',
    skip: 0,
    status: 'idle'
  },
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
      //New Change
      state.products = [];
      state.skip=0;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      //New Change
      state.products = [];
      state.skip=0;
    },
    incrementSkip: (state) => {
      state.skip += 10;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {

        const newProducts = action.payload.products;
        
        // Ensure that only unique products are added
        const existingIds = new Set(state.products.map(product => product.id));
        const uniqueProducts = newProducts.filter(product => !existingIds.has(product.id));

        // Append new products
        state.products = [...state.products, ...action.payload.products]; 
      });
  }
});

export const { setCategory, setSearchTerm, incrementSkip } = productsSlice.actions;
export default productsSlice.reducer;
