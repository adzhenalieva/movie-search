import axios from 'axios';
import {SEARCH_MOVIES_FAILURE, SEARCH_MOVIES_REQUEST, SEARCH_MOVIES_SUCCESS} from "../types";
import {API_KEY, MOVIE_API_URL} from "../../constants";

const searchMoviesRequest = () => ({type: SEARCH_MOVIES_REQUEST});
const searchMoviesSuccess = payload => ({type: SEARCH_MOVIES_SUCCESS, payload});
const searchMoviesFailure = error => ({type: SEARCH_MOVIES_FAILURE, error});

export const searchMovies = (title) => {
    return async dispatch => {
        try {
            dispatch(searchMoviesRequest());
            const response = await axios.get(`${MOVIE_API_URL}${title}&${API_KEY}`);
            if(response.data.Response === 'True') {
                dispatch(searchMoviesSuccess(response.data.Search));
            } else {
                dispatch(searchMoviesFailure(response.data.Error));
            }
        } catch (e) {
            dispatch(searchMoviesFailure(e));
        }
    };
};
