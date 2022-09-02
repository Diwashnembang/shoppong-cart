import { Route, Routes } from 'react-router-dom';

import Nagivation from './components/Nagivation'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'

function App() {
  return (
    <div className="App">
      <Nagivation />
      <Cart />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </div>
  )
}

export default App;