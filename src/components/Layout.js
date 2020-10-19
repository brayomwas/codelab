import React, { useState } from 'react';
import clsx from 'clsx';
import { Grid, Drawer, AppBar, Toolbar, CssBaseline, Typography, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Menu, MoveToInbox, Mail, ChevronRight, ChevronLeft } from '@material-ui/icons';
import DocumentHeading from './DocumentHeading';
import Footer from './Footer';
import SearchBar from 'material-ui-search-bar';
// import Nav from './Nav';
// import SideBar from './SideBar';

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
        background: '#ffffff'
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
        }),
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
    paper: {
        background: '#011638',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    title: {
        color: theme.palette.primary.main
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));
export default function Layout({children}) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('Search');
    
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
                })}
            >
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
                        <Menu color='primary'/>
                    </IconButton>
                    {/* <Typography variant='h5' noWrap className={classes.title}>
                         <DocumentHeading text='Code Challenges'/> 
                          Code Challenges
                    </Typography> */}
                    <Grid item xs={8}>
                        <SearchBar
                            value={searchValue}
                            onChange={() => setSearchValue('')}
                            onRequestSearch={() => alert('Searching')}
                        />
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer
                variant='permanent'
                className={classes.paper, clsx(classes.drawer, {
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
                <Divider />
                <List>
                    {['Pathways', 'Courses', 'Match & Code'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))
                    }
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
                <Footer />
            </main>
        </div>
    )
}