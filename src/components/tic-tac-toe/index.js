import { useEffect } from 'react';
import { connect } from 'react-redux';
import { reset } from '../../redux/actions/game';
import Row from './row';
import styles from './tic-tac-toe.module.css';

const mapStateToProps = ({ game: { grid } }) => ({
    grid
});

const mapDispatchToProps = {
    reset
}

const TicTacToe = ({ grid, reset }) => {
    useEffect(() => reset, []);

    return <>
        <div className={styles.container}>{grid.map((_, i) => <Row key={i} index={i} state={grid[i]} />)}</div>
        <button onClick={reset}>Reset</button>
    </>;
}

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);

