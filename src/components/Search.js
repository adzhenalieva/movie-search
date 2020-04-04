import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from '@material-ui/icons/Search';
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    margin: {
        margin: 50
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
            <form className="search">
                <TextField onChange={handleSearchInputChanges}
                           value={searchValue}
                           label="Movie title"
                           type="search"
                           variant="standard"
                           size="small"/>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<SearchIcon/>}
                    onClick={callSearchFunction} type="submit"
                >search</Button>
            </form>
        </div>
    );
};
