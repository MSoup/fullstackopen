import React from 'react';

// Reveals data for one country
const RevealCountryData = ({country}) => {
    return (
    <div className="hide">
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <p><strong>Languages</strong></p>
        <ul>
            <Languages props={country} />
        </ul>
        </div>
        )
    };

const Languages = ({props}) => {
    const languages = []
    const langList = props.languages
    for (const property in langList) {
        languages.push(<li key={props.name.common + " " + langList[property]}>{langList[property]}</li>)
        }
    return languages
}

export default RevealCountryData