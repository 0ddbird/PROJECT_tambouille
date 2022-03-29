import React from 'react'
import IngredientList from '../components/IngredientList/IngredientList'
import Header from '../components/Layout/Header'

const MyIngredients: React.FC = () => {
  return (
          <div className="my-ingredients">
              {<Header/>}
              <h2>Mes ingredients</h2>
              <IngredientList />
          </div>
  )
}

export default MyIngredients
