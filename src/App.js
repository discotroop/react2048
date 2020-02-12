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
    this.handleClick = this.handleClick.bind(this)
  }
 handleClick() {
   let newCount = this.state.count + 1;
   this.setState(state => ({
     count: newCount
   }));
 }
  render () {
    return (<div className="testState" onClick={this.handleClick}> <PropsUpdate count={this.state.count} /> </div>)
  }
}
class PropsUpdate extends React.Component {
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
  up () {
    this.props.game.board.moveTileUp();
    this.props.game.placeTile();
    this.setState(state => ({
    }))
  }
  down () {
    this.props.game.board.moveTileDown();
    this.props.game.placeTile();
    this.setState(state => ({
    }))

  }
  left () {
    this.props.game.board.moveTileLeft();
    this.props.game.placeTile();
    this.setState(state => ({
    }))

  }
  right () {
    this.props.game.board.moveTileRight();
    this.props.game.placeTile();
    this.setState(state => ({
    }))

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
