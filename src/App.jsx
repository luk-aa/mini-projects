import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import FAQ from './pages/Accordion/FAQ'
import Palette from './pages/randomColor/Palette'
import StarRating from './pages/starRating/StarRating'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='accordion' element={<FAQ />} />
          <Route path='palette' element={<Palette />} />
          <Route path='star-rating' element={<StarRating />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App