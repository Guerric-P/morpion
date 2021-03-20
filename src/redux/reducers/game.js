import { TICTACTOE_PLAY, TICTACTOE_RESET } from "../actions/game";

const initialState = { player: 1, grid: Array.from({ length: 3 }, () => Array.from({ length: 3 })) };

export default function (state, action) {
    switch (action.type) {
        case TICTACTOE_PLAY: {
            const { coordinates: { row, cell } } = action;
            if (!state.grid[row][cell]) {
                const newRow = [...state.grid[row]];
                newRow[cell] = state.player === 1 ? 1 : 2;

                const grid = [...state.grid];
                grid[row] = newRow;

                return {
                    player: state.player === 1 ? 2 : 1,
                    grid,
                };
            }
            else {
                return state;
            }
        }
        case TICTACTOE_RESET:
        default:
            return initialState;
    }
}