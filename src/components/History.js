import React, { Fragment } from 'react';

import styles from './history.module.css';

const History = ({ history, moveTo, currentMove }) => {
    return (
        <Fragment>
            <h4 className={styles.history_head}>Current Game History</h4>
            <div className={styles.history_div}>
                <ul className={styles.history}>
                    {history.map((_, index) => {
                        return (<li key={index}>
                            <button type="button" onClick={() => { moveTo(index) }} style={{ fontWeight: index === currentMove ? 'bold' : 'normal' }} className={styles.history_item}>{index === 0 ? 'Go to Game Start' : `Go to move #${index}`}</button>
                        </li>)
                    })}
                </ul>
            </div>
        </Fragment>
    )
}

export default History
