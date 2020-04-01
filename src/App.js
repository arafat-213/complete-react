import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'Jon', age: '20' },
      { name: 'Dany', age: '19' }
    ]
  }

  swicthNameHandler = () => {

    // DON'T DO THIS, THIS WON'T WORK:
    // this.state.persons[0].name = 'Jon cena'

    // Changing the state values, overwrites the existing ones
    this.setState({
      persons: [
        { name: 'Jon cena', age: 22 },
        { name: 'Daenerys', age: 23 }
      ]
    })

  }


  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Jon cena', age: 22 },
        { name: event.target.value, age: 23 }
      ]
    })
  }
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <button
          onClick={this.swicthNameHandler}
          style={style}>
          Switch states
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          change={this.nameChangedHandler}>
          Wow this is working</Person>

      </div>
    );
  }
}

export default App;
