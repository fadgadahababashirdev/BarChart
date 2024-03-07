import React, { useState } from 'react'
import userData from './components/userData'
import BarChart from './components/BarChart'
const App = () => {

    const [state,setState] =useState({
      labels:userData.map(labels=>labels.year),
      datasets:[{
        label:"User gained",
        data:userData.map(data=>data.usersGained)
      }]
    })
  

  return (
     <div><BarChart vua={state}/></div>
  )
}

export default App