import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div> testing </div>
      <TestingArr> </TestingArr>
    </div>
  );
}

class TestingArr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: [1, 0],
      test: "react 2048"
    }
  }
  right() {
    let arr = this.state.game;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        arr[i + 1] = arr[i];
        arr[i] = 0;
      }
    }
  }
  render() {
    return (
    <div> 
      <div> {this.state.test} </div>
    {this.state.game} 
    {this.right()}
    </div>
  
    );
  }
}

export default App;
