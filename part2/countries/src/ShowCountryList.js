import React from 'react';
import RevealCountryData from "./RevealCountryData.js";

const ShowCountries = ({countries}) => {
    if (countries.length === 1) {
        return <RevealCountryData country={countries[0]}/> 
    }
    else if (countries.length <= 10) {
        return ( countries.map(country => 
        <div className={country.name.common} key={country.name.common}>
            <span>{country.name.common} <button className="show" id={country.name.common} onClick={() => console.log(country) }>Show</button></span>
        </div>
        ))
    }
    else {
        return <p>Too many matches, specify another filter.</p>
    }
}

export default ShowCountries