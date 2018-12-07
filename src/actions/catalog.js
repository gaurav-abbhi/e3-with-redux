import {API_RECEIVE_MOVIE, API_RECEIVE_TV, API_REQUEST_MOVIE, API_REQUEST_TV} from "../constants/ActionTypes";
import {popular} from "../services/tmdb";

const requestMovie = () => ({
    type: API_REQUEST_MOVIE
});

const receiveMovie = json => ({
    type: API_RECEIVE_MOVIE,
    data: json
});

const requestTv = () => ({
    type: API_REQUEST_TV
});

const receiveTv = json => ({
    type: API_RECEIVE_TV,
    data: json
});

export const fetchMovie = page => dispatch => {
    dispatch(requestMovie());
    return fetch(popular("movie", page))
        .then(response => response.json())
        .then(json => dispatch(receiveMovie(json)));
};

export const fetchTv = page => dispatch => {
    dispatch(requestTv());
    return fetch(popular("tv", page))
        .then(response => response.json())
        .then(json => dispatch(receiveTv(json)));
};
