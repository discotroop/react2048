import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board.js'
import Game from './components/game.js'

function App() {
  return (
    <div className="App">
      <div> testing </div>
      <TestingArr board={Board()}> </TestingArr>
      {Game()}
    </div>
  );
}

class TestingArr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: props.board,
      test: "react 2048"
    }
  }
  drawTile(count, index) {
    return (
      <div className="tile"> {count}  index {index} </div>
    )
  }
  drawBoard() {
    let tileArr = []
    let tileRows = this.state.game.boardMap;

    tileRows.forEach((row) => {
      row.forEach((tile, index) => {
        tileArr.push(this.drawTile(tile.count, index));
      })
    })

    return (
      <div className="board">
        {tileArr}
      </div>
    )
  }

  render() {
    return (
    <div> 
      <div> {console.log(this.state.game)} hello
       </div>
       <div>
       {this.drawBoard()}
       </div>
    </div>
  
    );
  }
}

export default App;
