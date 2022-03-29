import React from 'react'
import { Iproduct } from '../../types'
import IngredientRow from './ProductRow'

interface IProps {
    ingredients: Iproduct[]
}

const IngredientTable: React.FC<IProps> = ({ ingredients }: IProps) => {
  return (
        <div className={`ingredients-table ${ingredients[0].category}-table`}>
          <div className='ingredients-table-header'>
             {ingredients[0].category}
          </div>
            {
            ingredients.map(ingredient => {
              return (
                    <IngredientRow key={ingredients.indexOf(ingredient)} id={ingredient.id} name={ingredient.name} category={ingredient.category} months={ingredient.months} />
              )
            })}
        </div>
  )
}

export default IngredientTable
