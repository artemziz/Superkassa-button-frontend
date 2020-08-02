import io from 'socket.io-client';

import {SWITCH_BTN} from '../types/types';
import {getBtn} from '../actions/getBtn';

let socket = null;

const ENDPOINT = 'http://localhost:5000';

export function Middleware(store) {
    return (next) => (action) => {
        const result = next(action);

        if (socket && action.type === SWITCH_BTN) {
            socket.emit('switchBtn');
        }

        return result;
    };
}
export function start(store) {
    socket = io.connect(ENDPOINT);

    socket.on('getBtn', ({btn}) => {
        store.dispatch(getBtn(btn));
    });
}
