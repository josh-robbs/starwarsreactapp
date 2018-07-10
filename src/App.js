import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Starwars from './components/Starwars'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      starWarsChars: [],
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(myJson => {
        this.setState({
            starWarsChars: myJson.results,
          })
      })
    fetch('https://swapi.co/api/people/?page=2')
      .then(response => response.json())
      .then(myJson => {
        this.setState({
          starWarsChars: [...this.state.starWarsChars,...myJson.results]
        })
      })
  }

  render() {
    return (
      <div className="App">
      <Header />
      <Starwars starWarsChars={this.state.starWarsChars} />
      <Footer />
      </div>
    );
  }
}

export default App;
