import styles from './row.module.css';
import clsx from 'clsx';
import Cell from './cell';

export default function({ state, index }) {
    return <div className={clsx(styles.row)}>{state.map((x, i) => <Cell key={i} row={index} cell={i} state={x} />)}</div>
}