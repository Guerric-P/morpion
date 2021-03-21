import { UPDATE } from "../actions/form";

const initialState = {
    isGoing: true,
    numberOfGuests: 2
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE: {
            const { prop, value } = action;
            return {
                ...state,
                [prop]: value
            };
        }
        default:
            return state;
    }
}