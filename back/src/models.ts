import { shellsAndMolluscs, crustaceans, fruits, games, frog, vegetable, fishes, poultryAndRabbit, allIngredients } from "./data";

interface Imap {
    [key: string] : number
}

const getIngredientsByCategory = (category: string) => {
    
    const map: Imap = {
        shellsAndMolluscs: 0,
        crustaceans: 1,
        fruits: 2,
        games: 3,
        frog: 4,
        vegetable: 5,
        fishes: 6,
        poultryAndRabbit: 7,
    }

    return allIngredients[map.category]

}

const getAllIngredients = allIngredients

export { getIngredientsByCategory, getAllIngredients }