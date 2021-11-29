import React, {useState, useEffect} from 'react';
import axios from "axios";
import Filter from "./filter.js";
// ShowCountryList uses RevealCountryData as a dependency
// import RevealCountryData from "./RevealCountryData.js";
import ShowCountries from "./ShowCountryList.js";

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState("")
  const [showList, setShowList] = useState([])

  useEffect(() => {
    axios
    .get("https://restcountries.com/v3.1/all")
    .then(response => response.data)
    .then(res => {
      setCountries(res.filter(country => country.name.common.startsWith(filter)))
    });
}, [filter])



  // const handleClick = (country) => {
  //   const id = country.name.common
  //   const btn = document.getElementById(id)
  //   const parentDiv = document.querySelector("div ." + id)
  //   // btn logic
  //   // "Show" was pressed, reveal country info
  //   if (btn.textContent === "Show") {
  //     btn.textContent = "Hide"
  //     console.log("Test1", parentDiv)
  //     console.log("Test2", btn)
  //     parentDiv.appendChild(<RevealCountryData country={country}/>)
  //   }
  //   // "Hide" was pressed, hide info
  //   else {
  //     btn.textContent = "Show"

  //     parentDiv.removeChild(document.querySelector("." + id))
  //   }
  // }

  return (
    <div>
    <h1>Test</h1>
    <Filter setFilter={setFilter}/>
    <ShowCountries countries={countries} />
    </div>
  );
}

export default App;
