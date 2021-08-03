import React, { useState, Fragment } from 'react';
import Board from './components/Board';
import { Winner as calculateWinner } from './Winner';
import History from './components/History';
import StatusMessage from './components/StatusMessage';

import './App.css';

const NEW_GAME = [{ board: Array(9).fill(null), isXnext: true }]

function App() {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const {winner, winningSquares} = calculateWinner(current.board);

  const clickHandler = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXnext ? 'X' : '0';
        }
        return square;
      });

      return prev.concat({ board: newBoard, isXnext: !last.isXnext })
    });

    setCurrentMove(prev => prev + 1);
  }

  const moveTo = (index) => {
    setCurrentMove(index);
  }

  const onNewgame = ()=> {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  }

  return (
    <Fragment>
      <h1 className="main-header">Tic <span className="span-head">Tac</span> Toe</h1>
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} clickHandler={clickHandler} winningSquares={winningSquares} />
      <div className="new_game"><button className="btn_game" type="button" onClick={onNewgame}>Start New Game</button></div>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </Fragment>
  );
}

export default App;
