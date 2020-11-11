import React, { useState } from 'react';
import clsx from 'clsx';
import { Grid, Drawer, AppBar, Toolbar, CssBaseline, Typography, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Menu, Home, Code, ChevronLeft, Whatshot, Queue, Explore } from '@material-ui/icons';
import DocumentHeading from './DocumentHeading';
import Footer from './Footer';
import { ReacComponent as Flame } from '../images/tinder.svg';
// import SearchBar from 'material-ui-search-bar';
import TopBar from './TopBar';
import { Link } from 'react-router-dom';
// import Nav from './Nav';
// import SideBar from './SideBar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    menuButton: {
        marginLeft: 1000,
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
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar
    },
    icon: {
      fontSize: 25
    }
}));

export default function Layout({children}) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const menuItems = [
        {
            name: 'Home',
            icon: <Home className = {classes.icon}/>,
            path:'/'
        },
        {
            name: 'Codelab',
            icon: <Whatshot className = {classes.icon}/>,
            path: '/codelab'
        },
        {
          name: 'Challenges',
          icon: <Code className = {classes.icon}/>,
          path: '/codeChallenges'
      },
        {
            name: 'Pathways',
            icon: <Queue className = {classes.icon}/>,
            path: '/pathways'
        },
        {
          name: 'Blog',
          icon: <Explore className = {classes.icon}/>,
          path: '/codeChallenges'
      }
    ];

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // }

    // const handleDrawerClose = () => {
    //     setOpen(false);
    // }

    const toggleDrawer = () => {
        open === true ? setOpen(false) : setOpen(true)
    }
    return (
        <>
            {/* <IconButton edge='start' aria-label='menu' onClick={handleDrawerOpen}>
                <Menu />
            </IconButton> */}
            {/* <AppBar position='static'>
                <Toolbar>
                    <Typography>
                        News
                    </Typography>
                </Toolbar>
            </AppBar> */}
            <TopBar />
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
                 <IconButton edge='start' aria-label='menu' onClick={toggleDrawer}>
                    {open ? <ChevronLeft /> : <Menu className={classes.menuButton} />}
                </IconButton>   
                    {/* <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
                    </IconButton> */}
                 </div>
                 <Divider />

                 <List>
                     {menuItems.map((item) => (
                         <Link to={item.path} key={item.name}>
                            <ListItem button >
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItem>
                         </Link>
                         
                     ))}
                 </List>
             </Drawer>
             <div className='container'>
                {children}
             </div>
            
        </>
    )
}