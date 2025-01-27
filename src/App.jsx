import React from 'react'
import Search from './components/Search.jsx'
import { useState } from 'react';
const App = () => {
  const [searchTerm, setSearchTerm] = useState(''); 

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="Hero Banner" />
          <h1>Discover <span className="text-gradient">Trending Movies</span> Without Hassle</h1>
        </header>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h1 className="text-white">{searchTerm}</h1>
      </div>
    </main> 
  )
}

export default App