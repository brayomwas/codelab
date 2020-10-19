import React, { useState } from 'react';
import clsx from 'clsx';
import { Drawer, Toolbar, List, Typography, Divider, ListItem, ListItemText, CssBaseline, ListItemIcon , IconButton, AppBar} from '@material-ui/core';
import { Menu, MoveToInbox, Mail, ChevronRight, ChevronLeft } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    drawerPaper: {
        width: drawerWidth,
        background: '#011638',
        color: '#ffffff'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    }

}));

export default function SideBar() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position='fixed'
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}>
                    <Toolbar>
                        <IconButton
                            color='inherit'
                            aria-label='open drawer'
                            onClick={handleDrawerOpen}
                            edge='start'
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <Menu />
                        </IconButton>
                        <Typography variant='h6' noWrap>
                            Drawer
                        </Typography>
                    </Toolbar>
            </AppBar>
            <Drawer
                variant='permanent'
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
                    </IconButton>
                </div>
            </Drawer>
        </div>
    )
    // return (
    //     <div className={classes.root}>
    //         <Drawer
    //             className={clsx(classes.drawer, {
    //                 [classes.drawerOpen]: open,
    //                 [classes.drawerClose]: !open,
    //             })}
    //             variant='permanent'
    //             classes={{
    //                 paper: classes.drawerPaper,
    //             }}
    //             anchor='left'
    //             >
    //                 <div className={classes.toolbar} />

    //                 <Divider />
    //                 <List>
    //                     {['Match and Code', 'Learning Pathways', 'Code Challenges', 'Drafts'].map((text, index) => (
    //                         <ListItem button key={index}>
    //                             <ListItemText primary={text} />
    //                         </ListItem>
    //                     ))}
    //                 </List>
    //             </Drawer>
    //     </div>
    // )

}