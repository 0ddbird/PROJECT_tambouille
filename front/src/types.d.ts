interface Iproduct{
    name: string,
    id: string,
    category: string
    months: number[]
  }

  interface Iingredient {
    name: string,
    category: string,
    quantity: number
  }
  interface Iingredients {
    shells: Iingredient[]
    crustaceans: Iingredient[]
    fruits: Iingredient[]
    meat: Iingredient[]
    vegetables: Iingredient[]
    fishes: Iingredient[]
  }
export { Iproduct, Iingredients, Iingredient }
