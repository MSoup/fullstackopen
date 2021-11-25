import React, {useState, useEffect} from 'react';
import axios from "axios";
import Filter from "./filter.js";

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState("")

  // const loadCountries = () => {
  //   axios
  //     .get("https://restcountries.com/v3.1/all")
  //     .then(response => response.data)
  //     .then(res => {
  //       const displayCountries = res.filter(country => country.name.common.startsWith(filter))
  //       setCountries(displayCountries)
  //     })
  // }

  useEffect(() => {
    axios
    .get("https://restcountries.com/v3.1/all")
    .then(response => response.data)
    .then(res => {
      setCountries(res.filter(country => country.name.common.startsWith(filter)))
    });
}, [filter])

  const showCountries = countries.map(country=>{
    return (
      <div key={country.name.common}>
        <p>Name: {country.name.common}</p>
        <p>Capital: {country.capital}</p>
        <p>Region: {country.region}</p>
        <br />
    </div>
    )
  })

  return (
    <div>
    <h1>Test</h1>
    <Filter setFilter={setFilter}/>
    {showCountries}
    </div>
  );
}

export default App;
