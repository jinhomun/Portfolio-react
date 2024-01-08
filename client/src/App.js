import React from 'react'
import Main from './page/Main'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Gyobok from './page/Gyobok'
import Youtube from './page/Youtube'
import Movie from './page/Movie'
import Aboutme from './page/Aboutme'
import Contact from './page/Contact'
import Gsap from './page/Gsap'
import Search from './page/Search'
import Quiz from './page/Quiz'

const App = () => {
  return (
    <Main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutme' element={<Aboutme />} />
        <Route path='/gsap' element={<Gsap />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/search' element={<Search />} />
        {/* <Route path='/wpoint' element={<Wpoint />} />
        <Route path='/vite' element={<Vite />} /> */}
        <Route path='/gyobok' element={<Gyobok />} />
        <Route path='/youtube' element={<Youtube />} />
        <Route path='/movie' element={<Movie />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Main>
  )
}

export default App