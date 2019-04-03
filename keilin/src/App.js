import React, { Component } from 'react';
import './App.css';
import Wrapper from './Wrapper';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Nav
          title= "Welcome to Keilin's Irish Dance Page!"
        />
      </Wrapper>
       
      
    );
  }
}

export default App;
