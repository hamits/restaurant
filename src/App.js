
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/restaurant' element={<Home/>} />
          <Route path='/restaurant/menu' element={<Menu/>} />
          <Route path='/restaurant/about' element={<About/>} />
          <Route path='/restaurant/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
