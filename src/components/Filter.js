import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, MenuItem, FormHelperText, Select, FormControl } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    minWidth: 120
}))
export default function Filter(props) {
    const classes = useStyles();
    return (
        <FormControl className={classes.formControl}>
            <InputLabel>{props.label}</InputLabel>
            <Select
                value={props.item}
                onChange={props.handleChange}
            >
                {props.menuItems.map((menuItem) => (
                    <MenuItem value={menuItem}>
                        {menuItem}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}