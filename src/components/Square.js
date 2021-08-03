import React from 'react';

import styles from './square.module.css';

const Square = ({value, onClick , isWinningSquare}) => {
    return (
        <button type="button" className={`${styles.btn} ${value === 'X' ? styles.text_X : styles.text_0}`} onClick={onClick} style={{fontWeight: isWinningSquare ? 'bolder' : '400'}}>{value}</button>
    )
}

export default Square
