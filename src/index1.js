import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 子组件
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }
  render() {
    return (
      <button
        className="square"
        onClick={() => { this.setState({ value: 'X' })}}
      >
        {this.state.value}
      </button>
    );
  }
}
// 父组件 2
// 传值方式 父组件到子组件 1 父组件属性={要传的值} 2子组件通过props接收
class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            squares:Array(9).fill(null)
    }
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]} />;
  }
  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
