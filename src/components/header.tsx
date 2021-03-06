import React from 'react';
import { Theme } from '@material-ui/core/styles';

import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/ViewList';
import InfoIcon from '@material-ui/icons/Info';
import { Hidden } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: theme.palette.primary.main,
  },
  toolbar: {
    minHeight: '10vh',
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    color: `white`,
    textDecoration: `none`,
  },
  link: {
    color: `black`,
    textDecoration: `none`,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 0px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  menuIcon: {
    fontSize: '1.5em',
  },
}));

interface Props {
  siteTitle: String;
}

const Header = ({ siteTitle }: Props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        id="appbar"
        elevation={2}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <Link className={classes.logo} to="/">
            <Typography variant="h6" color="inherit" noWrap>
              {siteTitle}
            </Typography>
          </Link>
          <Hidden lgUp>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="end"
            className={clsx(open && classes.hide)}
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <AnchorLink className={classes.link} to="/#welcome">
            <ListItem button onClick={handleDrawerClose}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Welcome</ListItemText>
            </ListItem>
          </AnchorLink>
          <AnchorLink className={classes.link} to="/#about">
            <ListItem button onClick={handleDrawerClose}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText>About me</ListItemText>
            </ListItem>
          </AnchorLink>
          <AnchorLink className={classes.link} to="/#projects">
            <ListItem button onClick={handleDrawerClose}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText>Projects</ListItemText>
            </ListItem>
          </AnchorLink>
        </List>
      </Drawer>
    </div>
  );
};

export default Header;
