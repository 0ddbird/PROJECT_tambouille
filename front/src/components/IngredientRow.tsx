import React from 'react'
import { Iingredient } from '../types'
import { v4 as uuidv4 } from 'uuid'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const circleCheck = (availability: number) => (<FontAwesomeIcon icon={faCircleCheck} className={`availability-${availability}`}/>)
const simpleCheck = (availability: number) => (<FontAwesomeIcon icon={faCircleCheck} className={`availability-${availability}`}/>)
const cross = (availability: number) => (<FontAwesomeIcon icon={faCircleXmark} className={`availability-${availability}`}/>)

const availabilityMap = [circleCheck, simpleCheck, cross]

const IngredientRow: React.FC<Iingredient> = ({ name, category, months, id }: Iingredient) => {
  return (
    <div className={`ingredient-row ${category}`} key={name}>
        <div className='ingredient-row__name'>
            {name}
        </div>
        <div className="ingredient-row__months">
            {
                months.map(availability => {
                  return (
                        <div className="month" key={uuidv4()}>
                            {
                                availabilityMap[availability](availability)
                            }
                        </div>
                  )
                })
            }
        </div>
    </div>
  )
}

export default IngredientRow
