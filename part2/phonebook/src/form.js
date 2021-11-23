import React, { useState } from 'react'

const Form = (props) => {
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (props.persons.filter(person => person.name === newName).length >= 1) {
          console.log("dup") 
          window.alert(`${newName} already exists`)
        }
        else {
          console.log("unique")
          props.setPersons(props.persons.concat({name: newName, number: newNumber}))
        }
      }


    return (
        <form>
            <div> name: <input onChange={(e)=>setNewName(e.target.value)} /> </div>
            <div> number: <input onChange={(e)=>setNewNumber(e.target.value)} /> </div>
            <br/>
            <div>
            <button type="submit" onClick={handleSubmit}>add</button>
            </div>
        </form>
    )
}

export default Form;