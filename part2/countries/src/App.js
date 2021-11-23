import React, {useState, useEffect} from 'react';
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([])

  const loadCountries = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => response.data)
      .then(res => setCountries(res))
  }

  useEffect(() => loadCountries(), [])

  return (
    <div>
    <h1>Test</h1>
    {countries.map(country=>{
      return (
        <div key={country.name.common}>
          <p>Name: {country.name.common}</p>
          <p>Capital: {country.capital}</p>
          <p>Region: {country.region}</p>
          <br />
      </div>
      )
    }).slice(0,10)}
    </div>
  );
}

export default App;
