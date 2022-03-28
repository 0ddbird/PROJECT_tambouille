import React, { FC, useState, useEffect } from 'react'
import IngredientTable from './components/IngredientTable'
import { Iingredient } from './types'
import MonthsMenu from './components/MonthsMenu'
import Header from './components/Layout/Header'
import callApi from './ApiProvider'

const path = '/ingredients'

const App: FC = () => {
  const [ingredients, setIngredients] = useState<Iingredient[][]>([])
  useEffect(() => {
    callApi(path).then(ingredientData => {
      setIngredients(ingredientData)
    })
  }, [])
  return (
    <div className="App">
      <Header />
      <MonthsMenu />
        <div className="tables-wrapper">
          {
            ingredients.map(array => {
              return <IngredientTable key={ingredients.indexOf(array)} ingredients={array}/>
            })
          }
        </div>
    </div>
  )
}

export default App
