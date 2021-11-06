import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '012-345-6789' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showPeople, setShowPeople ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (persons.filter(person => person.name === newName).length >= 1) {
      console.log("dup") 
      window.alert(`${newName} already exists`)
    }
    else {
      console.log("unique")
      setPersons(persons.concat({name: newName, number: newNumber}))
    }
  }

  const handleChangeFilter = (e) => {
    const filter = e.target.value
    setShowPeople(filter)
  }

  const phoneNumbersToShow = (showPeople === "")
    ? persons
    : persons.filter(person=>person.name.startsWith(showPeople))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>debug: {newName}</div>
      <p>Filter names with: <input onChange={handleChangeFilter}></input></p>
      <form>
        <div> name: <input onChange={(e)=>setNewName(e.target.value)} /> </div>
        <div> number: <input onChange={(e)=>setNewNumber(e.target.value)} /> </div>
        <br/>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {phoneNumbersToShow.map(person=> <p>{person.name}: {person.number}</p>)}
      </div>
    </div>
  )
}

export default App