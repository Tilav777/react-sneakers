import './App.css'
import { Route, Routes } from 'react-router-dom'

// Pages
import Main from './pages/main/Main'
import Basket from './pages/basket/Basket'

// components
import Header from './components/header/Header'

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/basket' element={<Basket />}/>
      </Routes>
    </div>
  )
}

export default App