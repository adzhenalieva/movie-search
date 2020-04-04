import React, {useState, useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Search} from "./components/Search";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {MovieCard} from "./components/MovieCard";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=e2141e16";

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
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                setMovies(jsonResponse.Search);
                setLoading(false);
            });
    }, []);

    const search = searchValue => {
        setLoading(true);
        setErrorMessage(null);

        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=e2141e16`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    setMovies(jsonResponse.Search);
                    setLoading(false);
                } else {
                    setErrorMessage(jsonResponse.Error);
                    setLoading(false);
                }
            });
    };

    return (
        <div className={classes.root}>
            <Header title={'My movies'}/>
            <Search search={search}/>
            <Typography className={classes.subtitle} variant="h6">Sharing a few of our favourite movies</Typography>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    {loading && !errorMessage ? (
                        <span>loading...</span>
                    ) : errorMessage ? (
                        <div className="errorMessage">{errorMessage}</div>
                    ) : (
                        movies.map((movie, index) => (
                            <Grid item xs={12} sm={4} key={`${index}-${movie.strDrink}`}>
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
