import React, { Fragment } from 'react';

const StatusMessage = ({ winner, current }) => {
    const isXwinner = winner === 'X';
    const noMovesLeft = current.board.every(el => el !== null);
    const isTied = !winner && noMovesLeft;

    const gameplay = current.isXnext ? 'gameplay1' : 'gameplay2';

    return (
        <h2 className={`${winner && 'winner'} ${isTied ? 'tied' : ''} `}>{winner && <Fragment>Winner is <span className={isXwinner ? 'winner_X' : 'winner_0'}>{winner}</span></Fragment>} {!winner && !noMovesLeft && <Fragment><div className='gameplay_head'> Next Player is <span className={gameplay}>{current.isXnext ? 'X' : '0'}</span></div></Fragment>}{isTied && 'Game Tied'}</h2>
    )
}

export default StatusMessage;
