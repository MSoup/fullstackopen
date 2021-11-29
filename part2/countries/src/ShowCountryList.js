import React from 'react';
import RevealCountryData from "./RevealCountryData.js";

const handleShow = (country) => {
    const container = document.querySelector("." + country.name.common + " > div")
    console.log(container)
}

const ShowCountries = ({countries}) => {
    if (countries.length === 1) {
        return <RevealCountryData country={countries[0]}/> 
    }
    else if (countries.length <= 10) {
        return ( countries.map(country => 
        <div key={country.name.common}>
            <div className={country.name.common}>
                <RevealCountryData country={countries[0]} />
            </div>
            <span>{country.name.common} <button className="show" id={country.name.common} onClick={() => handleShow(country) }>Show</button></span>
        </div>
        ))
    }
    else {
        return <p>Too many matches, specify another filter.</p>
    }
}

export default ShowCountries