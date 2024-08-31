import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import FAQ from './pages/Accordion/FAQ'
import Palette from './pages/randomColor/Palette'
import StarRating from './pages/starRating/StarRating'
import ImageSlider from './pages/imageSlider/ImageSlider'
import Menu from './pages/treeView/Menu'
import QRCodeGenerator from './pages/qrCodeGenerator/QRCodeGenerator'
import SearchBar from './pages/searchBar/SearchBar'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='accordion' element={<FAQ />} />
          <Route path='palette' element={<Palette />} />
          <Route path='star-rating' element={<StarRating />} />
          <Route path='image-slider' element={<ImageSlider />} />
          <Route path='tree-view' element={<Menu />} />
          <Route path='qr-code' element={<QRCodeGenerator />} />
          <Route path='searchbar' element={<SearchBar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App