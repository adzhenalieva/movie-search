import React from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 0,
            width: 250,
            paddingTop: '100%',
            margin: '0 auto'
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);
const DEFAULT_PLACEHOLDER_IMAGE =
    "https://i.pinimg.com/originals/3e/d2/ae/3ed2ae5ad26767a8fe0063a0485d5ab5.jpg";


export const MovieCard = ({movie}) => {
    const poster =
        movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        M
                    </Avatar>
                }
                title={movie.Title}
                subheader={movie.Year}
            />
            <CardMedia
                className={classes.media}
                image={poster}
                title={movie.Title}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                   Type: {movie.Type}
                </Typography>
            </CardContent>
        </Card>
    );
};

