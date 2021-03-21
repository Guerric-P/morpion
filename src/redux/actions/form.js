export const UPDATE = Symbol();

export const update = (prop, value) => ({ type: UPDATE, prop, value });