import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IngredientsBySeason from './pages/Seasons'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Cook from './pages/Cook'
import MyIngredients from './pages/MyIngredients'

const App = () => {
  return (
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path='/' element = {<Home />} />
              <Route path='/ingredients/' element={<IngredientsBySeason/>} />
              <Route path='/cuisiner/' element={<Cook />} />
              <Route path='mes-ingredients' element={<MyIngredients />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
  )
}

export default App
