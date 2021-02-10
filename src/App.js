import React, {Component} from 'react'
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium'
import './App.css';


class App extends Component {
  state = {
    persons: [
      {id:'dad1', name: 'Dharmik', age: 22},
      {id:'sdcsc1', name: 'Parth', age: 23},
      {id:'cdsc1', name: 'Riddhi', age: 22}
    ],
    showPersons: false
  }

  /* switchNameHandler = (newName) => {
    // console.log('clicked!')
    this.setState({
      persons: [
        {name: newName, age: 22},
        {name: 'Parth', age: 22}
      ]
    })
  } */

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.splice()
    const persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({persons: persons})
  }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(person => person.id === id)

    const person = {...this.state.persons[personIndex]}

    person.name = event.target.value

    let persons = [ ...this.state.persons ]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })

    
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {

  const style = {
    backgroundColor: 'green',
    color: 'white',
    border: '1px solid blue',
    padding: '8px',
    borderRadius: '5px',
    font: 'inherit',
    cursor: 'pointer',
    ':hover' : {
      backgroundColor: 'lightgreen',
      color:'black'
    }
  } 

  let persons = null
  if(this.state.showPersons){
    persons = (
      <div>
        {
          this.state.persons.map((person, index) => {
            return <Person 
            click = {this.deletePersonHandler.bind(this, index)}
            changed={(event) => this.nameChangeHandler(event, person.id)}
            name={person.name} 
            age={person.age}
            key={person.id}/>
          })
        }

      </div>
    )

    style.backgroundColor = 'red'
    style[':hover'] = {
      backgroundColor: 'orangered',
      color:'black'
    }
  }

  var classes =[]
  if(this.state.persons.length <=2) {
    classes.push('red')
  }
  if(this.state.persons.length<=1){
    classes.push('bold')
  }
    return (
      <StyleRoot>
      <div className="App">
        <h1> Hii I'm React App! </h1>
        <p className={classes.join(' ')}> This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonHandler}> Toggle persons </button>
  
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
