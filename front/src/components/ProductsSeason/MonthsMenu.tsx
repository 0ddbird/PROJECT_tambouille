import React from 'react'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const MonthsMenu: React.FC = () => {
  return (
        <div className="months-menu">
            {
              months.map(month => {
                return (
                  <button className="month-button" key={months.indexOf(month)}>{month}</button>
                )
              })
            }
        </div>
  )
}

export default MonthsMenu
