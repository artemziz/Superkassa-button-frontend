import {GET_BTN} from '../types/types';

export function getBtn(btn) {
    return {
        type: GET_BTN,
        payload: btn,
    };
}
