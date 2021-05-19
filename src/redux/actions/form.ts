export const FORM_UPDATE = 'FORM_UPDATE';

export const update = (prop: any, value: any) => ({ type: FORM_UPDATE, prop, value });