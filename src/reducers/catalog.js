import {API_RECEIVE_MOVIE, API_RECEIVE_TV} from "../constants/ActionTypes";
import _ from "lodash";

function extracted(state, action) {
    let countResults = _.size(state.results);
    let results = _.mapKeys(action.data.results, () => countResults++);
    return {
        ...state.results,
        ...results
    };
}

export const catalog = (
    state = {
        movie: {
            results: {},
            activePage: null
        },
        tv: {
            results: {},
            activePage: null
        }
    },
    action
) => {
    switch (action.type) {
        case API_RECEIVE_MOVIE:
            return {
                movie: {
                    results: extracted(state.movie, action),
                    activePage: action["data"]["page"]
                }
            };
        case API_RECEIVE_TV:
            return {
                tv: {
                    results: extracted(state.tv, action),
                    activePage: action["data"]["page"]
                }
            };
        default:
            return state;
    }
};
