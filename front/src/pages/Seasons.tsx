import React, { useState, useEffect } from 'react'
import ProductTable from '../components/ProductsSeason/ProductTable'
import { Iproduct } from '../types'
import MonthsMenu from '../components/ProductsSeason/MonthsMenu'
import callApi from '../ApiProvider'
import Header from '../components/Layout/Header'

const path = '/ingredients'

const ProductsBySeason: React.FC = () => {
  const [ingredients, setIngredients] = useState<Iproduct[][]>([])
  useEffect(() => {
    callApi(path).then(ingredientData => {
      setIngredients(ingredientData)
    })
  }, [])
  return (
    <div className="Ingredients">
      {<Header />}
      <MonthsMenu />
        <div className="tables-wrapper">
          {
            ingredients.map(array => {
              return <ProductTable key={ingredients.indexOf(array)} ingredients={array}/>
            })
          }
        </div>
    </div>
  )
}

export default ProductsBySeason
