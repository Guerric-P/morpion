import styles from './cell.module.css';
import clsx from 'clsx';
import { play } from '../../redux/actions/game';
import { connect } from 'react-redux';

const mapDispatchToProps = {
    play
};

function Cell({ state, play, row, cell }) {
    return <div className={clsx(styles.cell)} onClick={() => play({ row, cell })}>{state ? (state === 1) ? '✕' : '◯' : ''}</div>
}

export default connect(null, mapDispatchToProps)(Cell);