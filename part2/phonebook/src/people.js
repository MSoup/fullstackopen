const People = ({displayPeople}) => {
    return (
    <div>
        {displayPeople.map(person=> <p key={person.number}>{person.name}: {person.number}</p>)}
    </div>
    )
}

export default People