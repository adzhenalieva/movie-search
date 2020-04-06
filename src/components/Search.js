import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from '@material-ui/icons/Search';
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    margin: {
        margin: 50
    },
    form: {
        flexDirection: 'row'
    }
}));

export const Search = (props) => {
    const classes = useStyles();
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    };

    const resetInputField = () => {
        setSearchValue("")
    };

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    };

    return (
        <div className={classes.margin}>
            <FormControl className={classes.form}>
                <TextField onChange={handleSearchInputChanges}
                           value={searchValue}
                           label="Movie title"
                           type="search"
                           variant="standard"
                           size="medium"/>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<SearchIcon/>}
                    onClick={callSearchFunction} type="submit"
                >search</Button>
            </FormControl>
        </div>
    );
};
