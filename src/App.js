import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { id: 'aecd2', name: 'Jon', age: '20' },
      { id: 'aevr5', name: 'Dany', age: '19' },
      { id: 'sfbsrt3', name: 'Tyrion', age: 32 }
    ],
    showPersons: false
  }

  deletePersonHandler = ( personIndex ) => {
    const persons = [ ...this.state.persons ]
    persons.splice( personIndex, 1 )
    this.setState( { persons } )
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => id === p.id )

    const person = { ...this.state.persons[ personIndex ] }

    person.name = event.target.value

    const persons = [ ...this.state.persons ]

    persons[ personIndex ] = person

    this.setState( {
      persons: persons
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState( { showPersons: !doesShow } )
  }

  render () {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null

    if ( this.state.showPersons ) {
      persons = (
        <div>
          { this.state.persons.map( ( person, index ) => {
            return <Person
              click={ () => { this.deletePersonHandler( index ) } }
              name={ person.name }
              age={ person.age }
              key={ person.id }
              changed={ ( event ) => { this.nameChangedHandler( event, person.id ) } }
            />
          } ) }
        </div>
      )
    }
    return (
      <div className="App">
        <button
          onClick={ this.togglePersonsHandler }
          style={ style }>
          Switch states
        </button>
        <div>
          { persons }
        </div>
      </div>
    )
  }
}

export default App
