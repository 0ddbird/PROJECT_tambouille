import React, { ChangeEvent, useState } from 'react'
import { v4 } from 'uuid'

interface Iprops {

}

type Ingredient = {
    name: string
    isConsumed: boolean
    id: string
}

const IngredientList: React.FC<Iprops> = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [newIngredientName, setNewIngredientName] = useState('')
  const handlenewIngredientNameChange = (e: ChangeEvent<HTMLInputElement>) => setNewIngredientName(e.target.value)

  const handleNewIngredientKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIngredients(ingredients => [...ingredients, { name: newIngredientName, id: v4(), isConsumed: false }])
      setNewIngredientName('')
    }
  }

  const handleConsumptionChange = (handledIngredient: Ingredient) => (e: ChangeEvent<HTMLInputElement>) => {
    setIngredients(ingredients.map(ingredient => {
      if (handledIngredient.id === ingredient.id) return { ...ingredient, isConsumed: e.target.checked }
      return ingredient
    }))
  }

  const handleClearClick = () => setIngredients(ingredients => ingredients.filter(ingredient => !ingredient.isConsumed))
  console.log(ingredients)

  return (
      <div className='ingredient-list'>
          <div className='list'>
              {

              ingredients.map(ingredient => {
                return (
                    <div key={ingredient.id}>
                        <input type='checkbox' checked={ingredient.isConsumed} onChange={handleConsumptionChange(ingredient)}/>
                        {ingredient.name}
                    </div>
                )
              }
              )

              }

          </div>
          <input
          value={newIngredientName}
          onChange={handlenewIngredientNameChange}
          onKeyDown ={handleNewIngredientKeyDown}
          />
          <button onClick={handleClearClick}>Clear consumed</button>
      </div>

  )
}

export default IngredientList
