import React from 'react';

const Filter = ({setShowPeople}) => {
    const handleChangeFilter = (e) => {
        const filter = e.target.value
        setShowPeople(filter)
      }
      
    return (
        <div>
            <p>Filter names with: <input onChange={handleChangeFilter}></input></p>
        </div>
    )
}

export default Filter;