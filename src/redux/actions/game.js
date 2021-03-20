export const TICTACTOE_PLAY = Symbol();
export const TICTACTOE_RESET = Symbol();

export const play = coordinates => ({ type: TICTACTOE_PLAY, coordinates });

export const reset = () => ({ type: TICTACTOE_RESET });