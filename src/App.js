import React from 'react';
import './App.css';
// import Board from './components/Board.js'
import Game from './components/game.js'

const game = Game()
let board = game.board;

function App() {
  return (
    <div className="App">
      <div> testing </div>
      <TestingArr game={game} board={board}> </TestingArr>
    </div>
  );
}
class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    }
  }
  render() {
    return ( <div className="tile"> {this.props.count} </div>)
  }
}

class TestingArr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: props.game,
      board: game.board,
      test: "react 2048"
    }
  }
  // drawTile(count, index) {
  //   return (
  //     <div className="tile"> {count} </div>
  //   )
  // }
  drawBoard() {
    let tileArr = []
    this.state.game.placeTile();
    let tileRows = this.state.game.board.boardMap;

    tileRows.forEach((row, index) => {
      let that = this
      let x = index;
      row.forEach((tile, index) => {
        let y = index;
        tileArr.push(<Tile count={that.state.game.board.boardMap[x][y].count}></Tile>);
      })
    })

    return (
      <div className="board">
        {tileArr}
      </div>
    )
  }
  up () {
    console.log("up");
    this.props.game.board.moveTileUp();
      console.log(this.props.game.board.boardMap)
      console.log(this.state.board.boardMap);
  }
  down () {
    console.log("down")
    this.props.game.board.moveTileDown();
    console.log(this.props.game.board.boardMap)

  }
  left () {
    console.log("left")
    this.props.game.board.moveTileLeft();
    console.log(this.props.game.board.boardMap)

  }
  right () {
    console.log("right")
    this.props.game.board.moveTileRight();
    console.log(this.props.game.board.boardMap)

  }
  handleKeyPress = (key) => {
    if (key === "ArrowUp") {
      this.up();
    } else if (key === "ArrowDown") {
      this.down();
    } else if (key === "ArrowLeft") {
      this.left();
    } else if (key === "ArrowRight") {
      this.right();
    } else {
      return;
    }
  }
  handleEvents() {
    window.addEventListener('keyup' , (e) => this.handleKeyPress(e.key));
  }
  componentDidMount() {
    this.handleEvents();
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
