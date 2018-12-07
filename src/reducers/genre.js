import {SET_GENRE} from '../constants/ActionTypes';

export default function setGenre(state = "Seattle, WA", action) {
    switch (action.type) {
        case SET_GENRE:
            return action.payload;
        default:
            return state;
    }
};