const handleNoIngredientsData = (response, ingredientData) => {
    if (!ingredientData) {
        response.statusCode = 404
        return response.json('Cannot get ingredient')
    }

    return response.json({data: ingredientData})
}

export {handleNoIngredientsData}