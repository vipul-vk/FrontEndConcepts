import React from 'react'
import Person from './Person'

function PersonList() {
    const persons = [
        {
            id:1,
            name:'a',
            age: 30,
            skill:'react'
        },
        {
            id:2,
            name:'b',
            age: 25,
            skill:'Angular'
        },
        {
            id:3,
            name:'c',
            age: 20,
            skill:'Vue js'
        },
        
    ]
    const personList = persons.map(person =><Person key={person.id} person={person}/>)
  return (
    <div>{personList}</div>
  )
}

export default PersonList