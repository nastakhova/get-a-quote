import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => (
  <div className="page">
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><Link to="/">Home</Link></li>
          <li className="nav__item"><Link to="/about-us">About</Link></li>
        </ul>
      </nav>
    </header>
    <main className="main">
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
