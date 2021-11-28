import React, {useState, useEffect} from 'react';
import axios from "axios";
import Filter from "./filter.js";

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    axios
    .get("https://restcountries.com/v3.1/all")
    .then(response => response.data)
    .then(res => {
      setCountries(res.filter(country => country.name.common.startsWith(filter)))
    });
}, [filter])

  const Reveal = (country) => {
    const languages = []
    for (const property in country.languages) {
        languages.push(<li key={country + " " + country.languages[property]}>{country.languages[property]}</li>)
      }
    return (
    <div className={country.name.common}>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <p><strong>Languages</strong></p>
        <ul>
          {languages}
        </ul>
      </div>
      )
  }

  const handleClick = (country) => {
    const id = country.name.common
    const btn = document.getElementById(id)
    const parentDiv = document.querySelector("." + id)
    // btn logic
    // "Show" was pressed, reveal country info
    if (btn.textContent === "Show") {
      btn.textContent = "Hide"
      console.log("Test1", parentDiv)
      console.log("Test2", btn)
      parentDiv.appendChild(<Reveal country={country}/>)
    }
    // "Hide" was pressed, hide info
    else {
      btn.textContent = "Show"

      parentDiv.removeChild(document.querySelector("." + id))
    }
  }

  const ShowCountries = (countries) => {
    if (countries.length === 1) {
      const country = countries[0]
      return <Reveal country={country}/> 
    }
    else if (countries.length <= 10) {
      return ( countries.map(country => 
        <div className={country.name.common} key={country.name.common}>
          <span>{country.name.common} <button className="show" id={country.name.common} onClick={() => handleClick(country) }>Show</button></span>
        </div>
      ))
    }
    else {
      return <p>Too many matches, specify another filter</p>
    }

  }
 

  return (
    <div>
    <h1>Test</h1>
    <Filter setFilter={setFilter}/>
    <ShowCountries countries={countries} />
    </div>
  );
}

export default App;
