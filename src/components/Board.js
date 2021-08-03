import React, { Fragment } from 'react';

import Square from './Square';

import styles from './board.module.css';

const Board = ({board, clickHandler, winningSquares}) => {

    const showBoard = position => {
        const isWinningSquare = winningSquares.includes(position);
        return (<Square value={board[position]} onClick={() => { clickHandler(position)}} isWinningSquare={isWinningSquare} />);
    }

    return (
        <Fragment>
            <div id={styles.board}>
                <div>
                    {showBoard(0)}
                    {showBoard(1)}
                    {showBoard(2)}
                </div>

                <div>
                    {showBoard(3)}
                    {showBoard(4)}
                    {showBoard(5)}
                </div>

                <div>
                    {showBoard(6)}
                    {showBoard(7)}
                    {showBoard(8)}
                </div>
            </div>
        </Fragment>
    )
}

export default Board;
