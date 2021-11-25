import React, {useState, useEffect} from 'react';

const Filter = ({setFilter}) => {
    const handleChangeFilter = (e) => {
        const filter = e.target.value
        setFilter(filter)
    }

    return (
    <div>
        <p>Filter Countries by Start Alphabet</p>
        <input onChange={handleChangeFilter}></input>
    </div>
    )
}

export default Filter