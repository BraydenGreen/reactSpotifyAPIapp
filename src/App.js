import React, { Component } from 'react';
import './App.css';

let headerColor = 'aqua'
let defaultTextColor = '#FFF';
let defaultStyle = {
  color: defaultTextColor
}


class Aggregate extends Component {
  render(){
    return(
      <div style={{width: "40%", display: "inline-block"}}>
        <h2 style={{ color: headerColor }}>Number Text</h2>
      </div>
    );
  }
}

class Playlist extends Component {
  render(){
    return(
      <div style={{...defaultStyle,  display: 'inline-block', width: "25%"}}>
        <img />
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return(
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{color: defaultTextColor}}>Title</h1>
        <Aggregate />
        <Aggregate />
        <Filter/>
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    );
  }
}

export default App;
