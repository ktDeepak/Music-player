import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu from './components/menu'
import Music from './components/Music'
import Pnf from './components/Pnf'
import Track from './components/Track'

function App() {
  return(
    <Router>
      <Menu/>
      <Routes>
        <Route path={`/`} element={<Music/>}/>
        <Route path={`/Music`} element={<Music/>}/>
        <Route path={`/Tracks/:id`} element={<Track/>} />
        <Route path={`/*`} element={<Pnf/>}/>
      </Routes>
    </Router>
  )
}
export default App