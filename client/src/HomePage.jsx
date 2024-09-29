import React from 'react'
import CatalogArea from './CatalogArea'
import Searchbar from './Searchbar'

import CategoryInfo from './CategoryInfo'

const HomePage = () => {
  return (
    <div className="HomePage">
      <CatalogArea/>
      <CategoryInfo/>
      <Searchbar/>
      
    </div>
    
  
  )
}

export default HomePage