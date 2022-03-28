import express from 'express'
import { handleNoIngredientsData } from './middleware'
import { getAllIngredients } from './models'

const router = express.Router()

router.get('/ingredients', (request, response) => {
    const ingredientData = getAllIngredients
    return handleNoIngredientsData(response, ingredientData)
})

export default router