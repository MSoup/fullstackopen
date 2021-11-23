import React, { useState, useEffect } from 'react';
import Form from "./form";
import Filter from "./filter";
import People from "./people";
import axios from "axios";

const App = () => {


  const [ persons, setPersons ] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(res => {
        setPersons(res.data)
        console.log(res.data)
    })
  
  }, [])

  const [ showPeople, setShowPeople ] = useState("")

  const phoneNumbersToShow = (showPeople === "")
  ? persons
  : persons.filter(person=>person.name.toLowerCase().startsWith(showPeople.toLowerCase()))


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setShowPeople={setShowPeople} />
      <Form persons={persons} setPersons={setPersons} />
      
      <h2>Numbers</h2>
      <People displayPeople={phoneNumbersToShow}/>

    </div>
  )
}

export default App