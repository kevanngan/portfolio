import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Hero from './components/Hero'

function App() {
  const restBase = 'https://kevanngan.com/portfolio/wp-json/wp/v2/';

  return (
   <Router basename= "/portfolio">
    <header className="site-header">
      <nav className="site-navigation">
        <ul>
          <li><NavLink to='/' end>Home</NavLink></li>
          <li><NavLink to='/projects'>Projects</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='contact'>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
    <main class="main">
      <Routes>
        <Route path="/" element={<Home restBase={restBase}/>} />
        <Route path="/projects" element={<Projects restBase={restBase}/>} />
        <Route path="/about" element={<About restBase={restBase}/>} />
        <Route path="/contact" element={<Contact restBase={restBase}/>} />
      </Routes>
    </main>
   </Router>
  )
}

export default App
