import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {

  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
      }
      )
      .catch(err => console.error(err))

  }, [])

  const handleAddCountry = (country) => {
        console.log('added', country);
        const newCart = [...cart, country];
        setCart(newCart);

  };


  return (
    <div className="App">

      <h1>{countries.length} countries</h1>
      <h1>country added {cart.length}</h1>
      <Cart cart={cart}></Cart>

      <ul>
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)

        }
      </ul>

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
