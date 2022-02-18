import React from 'react'
import styles from './Increment.module.scss'


const Increment = () => {
    return(
        <div className={styles.increment}>
            <div className={styles.white}>+1</div>
        </div>
    )
}

export default Increment