import React from 'react'
import PublicCatalog from './pages/PublicCatalog'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
const App = () => {
  return (
   <Routes>
    <Route path="/" element={<PublicCatalog/>}></Route>
   </Routes>
  )
}

export default App
