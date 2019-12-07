import React, { Component } from 'react';
import './App.css';
import CardList from '../components/card-list/CardList.component';
import SearchBox from '../components/search-box/SearchBox.component';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters : users }));
  }

  setSearchField = (e) => {
    const value = e.target.value;
    this.setState({ searchField : value })
  }
  
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
          monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1 className="title">Monsters Holodex</h1>
        <SearchBox placeholder="Search Monsters" 
                  handleChange={this.setSearchField}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}



export default App;
