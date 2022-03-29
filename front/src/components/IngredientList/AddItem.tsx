import React from 'react'

const AddItem: React.FC = () => {
  return (
        <div>
            <form>
                <label>
                  Ajouter un ingrédient
                  <input
                  type="text"/>
                </label>
                <button className="submit-button">Ajouter</button>
              </form>
        </div>
  )
}

export default AddItem
