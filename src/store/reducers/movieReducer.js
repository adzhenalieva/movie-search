import {SEARCH_MOVIES_FAILURE, SEARCH_MOVIES_REQUEST, SEARCH_MOVIES_SUCCESS} from "../types";

const  initialState = {
  loading: false,
  movies: [],
  error: null
};

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload,
                loading: false
            };
        case SEARCH_MOVIES_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state
    }
};
