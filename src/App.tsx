
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import Detail from './pages/detail'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Routes>
<Route path="/" element={<Home/>} />
<Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
