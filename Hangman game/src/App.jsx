import { Route, Routes, } from 'react-router-dom'
import './App.css'
import StartGame from './pages/startGame.jsx'
import PlayGame from './pages/playGame.jsx'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<StartGame />}></Route>

          <Route path='/play' element={<PlayGame />}></Route>

        </Routes>
      </div>
    </>
  )
}

export default App
