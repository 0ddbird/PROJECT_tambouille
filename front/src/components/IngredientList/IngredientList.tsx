import React, { ChangeEvent, useState } from 'react'
import { v4 } from 'uuid'

interface Iprops {

}

type Ingredient = {
    name: string
}

const IngredientList: React.FC<Iprops> = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [newIngredientName, setNewIngredientName] = useState('')
  const handlenewIngredientNameChange = (e: ChangeEvent<HTMLInputElement>) => setNewIngredientName(e.target.value)

  const handleNewIngredientKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIngredients(ingredients => [...ingredients, { name: newIngredientName }])
      setNewIngredientName('')
    }
  }
  return (
      <div className='ingredient-list'>
          <div className='list'>
              {ingredients.map(ingredient => <div key={v4()}>{ingredient.name}</div>)}
          </div>
          <input
          value={newIngredientName}
          onChange={handlenewIngredientNameChange}
          onKeyDown ={handleNewIngredientKeyDown}
          />
      </div>

  )
}

export default IngredientList
