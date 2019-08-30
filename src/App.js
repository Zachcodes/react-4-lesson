import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      jedi: {}
    };
  }

  componentDidMount() {
    axios
      .get('https://swapi.co/api/people/1')
      .then(response => {
        console.log('response \n', response);
        let { data } = response;
        this.setState({
          jedi: data
        });
      })
      .catch(err => {
        console.log('err \n', err);
      });
  }

  render() {
    let { jedi } = this.state;
    return (
      <div className="App">
        <h5>{jedi.name}</h5>
        <p>gender: {jedi.gender}</p>
        <p>Eye Color: {jedi.eye_color}</p>
        <p>Hair Color: {jedi.hair_color}</p>
      </div>
    );
  }
}

export default App;
