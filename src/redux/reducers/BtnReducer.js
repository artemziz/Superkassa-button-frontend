import {SWITCH_BTN, GET_BTN} from '../types/types';

const initialState = {
    isOn: false,
};

export const BtnReducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_BTN:
        return {...state, isOn: action.payload};
    case SWITCH_BTN:
        return state;
    default:
        return state;
    }
};
