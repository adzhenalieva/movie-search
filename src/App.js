import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";

import {searchMovies} from "./store/actions/movieActions";
import {Header} from "./components/Header";
import {Search} from "./components/Search";
import {MovieCard} from "./components/MovieCard";

import './App.css';


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        textAlign: 'center'
    },
    subtitle: {
        margin: 50
    }
}));

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchMovies('man'))
    }, [dispatch]);

    const movies = useSelector(state => state.movie.movies);
    const loading = useSelector(state => state.movie.loading);
    const error = useSelector(state => state.movie.error);

    const search = searchValue => {
        dispatch(searchMovies(searchValue))
    };

    return (
        <div className={classes.root}>
            <Header title={'My movies'}/>
            <Search search={search}/>
            <Typography className={classes.subtitle} variant="h6">Sharing a few of our favourite movies</Typography>
            <Container maxWidth="lg">
                <Grid container>
                    {loading && !error ? (
                        <Grid item xs={12}>
                            <CircularProgress/>
                        </Grid>
                    ) : error ? (
                        <Grid item xs={12}>
                            <Alert variant="filled" severity="error">
                                {error}
                            </Alert>
                        </Grid>
                    ) : (
                        movies.map((movie, index) => (
                            <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
                                <MovieCard movie={movie}/>
                            </Grid>
                        ))
                    )}
                </Grid>
            </Container>
        </div>
    );
};

export default App;
