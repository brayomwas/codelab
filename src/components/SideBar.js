import React from 'react';
import { Drawer, Toolbar, List, Typography, Divider, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        
    },
    drawerPaper: {
        width: drawerWidth,
        background: '#011638',
        color: '#ffffff'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    }

}));

export default function SideBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant='permanent'
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor='left'
                >
                    <div className={classes.toolbar} />

                    <Divider />
                    <List>
                        {['Match and Code', 'Learning Pathways', 'Code Challenges', 'Drafts'].map((text, index) => (
                            <ListItem button key={index}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
        </div>
    )
}