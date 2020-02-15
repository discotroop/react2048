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
      <GameBox game={game} board={board}> </GameBox>
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
  findTileStyle () {
    let count = this.props.count;
    let result = String;

    switch(count) {
      case 2:
      result = "two";
      break;
      case 4:
      result = "four";
      break; 
      case 8:
        result = "eight";
      break;
      case 16:
        result = "sixteen";
      break;
      case 32:
        result = "thirtytwo";
      break;
      case 64:
        result = "sixtyfour";
      break;
      case 128:
        result = "onetwentyeight";
      break;
      case 256:
        result = "twofiftysix";
      break;
      case 512:
        result = "fivetwelve";
      break;
      case 1024:
        result = "tentwofour";
      break;
      case 2048:
        result = "2048";
      break;
      default: 
      result = "zero"
      break;
    }
    return result;
  }

  setClassNames() {
    let result = "tile " + this.findTileStyle();
    return result;
  }

  render() {
    return ( <div className={this.setClassNames()}> {this.props.count} </div>)
  }
}
class GameBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: props.game,
      board: game.board,
      test: "react 2048"
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  drawBoard() {
    let tileArr = []
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
  totalCount() {
    let total = []
    this.props.game.board.boardMap.forEach((arr) => {
      arr.forEach((tile) => {
        if (tile.count > 0) {
          total+= tile.count;
        }
      })
    })
    return total;
  }
  // this works partially but still has problems, might have to write some tests
  // dammit 
  moveWasLegal(firstArr, secondArr) {
    let legalMove = false;
    for (let i = 0; i < firstArr.length; i++) {
      if (firstArr[i].count !== secondArr[i].count) {
        legalMove = true;
        return legalMove;
      }
    }
    console.log(legalMove)
    return legalMove;
  }
  updateBoard() {
    this.setState(state => ({}));
  }

  // these have become redunant with expansion, fix in refactor.
  up () {
    let first = this.props.game.getTileList();
    this.props.game.board.moveTileUp();
    let second = this.props.game.getTileList();
    if (this.moveWasLegal(first, second) === false) {
      this.updateBoard();
      return;
    } else {
    this.props.game.placeTile();
    this.updateBoard();
    }
  }
  down () {
    let first = this.props.game.getTileList();
    this.props.game.board.moveTileDown();
    let second = this.props.game.getTileList();

    if (this.moveWasLegal(first, second) === false) {
      this.updateBoard();
      return;
    } else {
    this.props.game.placeTile();
    this.updateBoard();
    }
  }
  left () {
    let first = this.props.game.getTileList();

    this.props.game.board.moveTileLeft();
    
    let second = this.props.game.getTileList()
    if (this.moveWasLegal(first, second) === false) {
      this.updateBoard() 
      return;
    } else {
      this.props.game.placeTile();
      this.updateBoard();
    }
  }
  right () {
    let first = this.props.game.getTileList();
    this.props.game.board.moveTileRight();
    let second = this.props.game.getTileList();
    if (this.moveWasLegal(first, second) === false) {
      this.updateBoard();
      return;
    } else {
      this.props.game.placeTile();
      this.updateBoard();
    }
  }
  handleKeyPress = (key) => {
    if (this.props.game.hasLost() === true)
      {console.log("loser")
      return; }
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
    window.addEventListener('keydown' , (e) => this.handleKeyPress(e.key));
  }
  componentDidMount() {
    this.handleEvents();
  }
  render() {
    return (
    <div> 
      <div>  hello
       </div>
       <div>
       {this.drawBoard()}
       </div>
    </div>
  
    );
  }
}

export default App;
