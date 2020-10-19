import React from 'react';
import { IconButton, InputBase, Paper } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));
export default function SearchBar() {
    const classes = useStyles();
    return (
        <Paper component='form' className={classes.root}>
             <InputBase 
                className={classes.input}
                placeholder='Search'
                InputProps={{'aria-label': 'search', disableUnderline: true }}
                />
                <IconButton type='submit' className={classes.iconButton} aria-label='search'>
                    <Search />
                </IconButton>
        </Paper> 
    )
}