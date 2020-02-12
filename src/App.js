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
      <TestingState />
    </div>
  );
}
class TestingState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  countUp() {
    let added = this.state.count;
    let adder = added + 1;
    this.setState({count: adder})
  }

  render () {
    return (<div className="testState" onClick={this.countUp()}> {this.state.count} </div>)
  }
}
class propsUpdate extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {};
  }
  render() {
    return (<div className="propsUpdate"> {this.props.count} </div> )
  }
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
    this.props.game.placeTile();
    let tileRows = this.props.game.board.boardMap;

    tileRows.forEach((row, index) => {
      let that = this
      let x = index;
      row.forEach((tile, index) => {
        let y = index;
        tileArr.push(<Tile count={that.props.game.board.boardMap[x][y].count}></Tile>);
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
    this.props.game.placeTile();
  }
  down () {
    console.log("down")
    this.props.game.board.moveTileDown();
    console.log(this.props.game.board.boardMap)
    this.props.game.placeTile();

  }
  left () {
    console.log("left")
    this.props.game.board.moveTileLeft();
    console.log(this.props.game.board.boardMap)
    this.props.game.placeTile();

  }
  right () {
    console.log("right")
    this.props.game.board.moveTileRight();
    console.log(this.props.game.board.boardMap)
    this.props.game.placeTile();

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
      <div> {console.log(this.props.game)} hello
       </div>
       <div>
       {this.drawBoard()}
       </div>
    </div>
  
    );
  }
}

export default App;
