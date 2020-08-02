
import {combineReducers} from 'redux';
import {BtnReducer} from './BtnReducer';
export const rootReducer = combineReducers({
    Btn: BtnReducer,
});
