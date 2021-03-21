export const TICTACTOE_PLAY = 'TICTACTOE_PLAY';
export const TICTACTOE_RESET = 'TICTACTOE_RESET';

export const play = coordinates => ({ type: TICTACTOE_PLAY, coordinates });

export const reset = () => ({ type: TICTACTOE_RESET });