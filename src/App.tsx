
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import Detail from './pages/detail'

const App = () => {
  return (
    <BrowserRouter>
    <div className='bg-gray min-h-screen px-4 py-6 md:px-6 md:py-8 xl:px-14 xl:py-8 lg:px-8'>
      <Header />
      <Routes>
<Route path="/" element={<Home/>} />
<Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
