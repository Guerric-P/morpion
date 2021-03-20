import './App.css';
import { BrowserRouter as Router, Switch, Route, Link as RouterLink } from 'react-router-dom';
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { connect } from 'react-redux';
import { expandSidebar, collapseSidebar } from './redux/actions/layout';

const TicTacToe = React.lazy(() => import('./components/tic-tac-toe'));
const Form = React.lazy(() => import('./components/form'));
const Email = React.lazy(() => import('./components/email'));
const Drafts = React.lazy(() => import('./components/drafts'));

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const mapDispatchToProps = {
  expandSidebar,
  collapseSidebar,
}

const mapStateToProps = ({ layout: { sideBarOpen } }) => ({
  sideBarOpen
})

function App({ expandSidebar, collapseSidebar, sideBarOpen }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: sideBarOpen,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={expandSidebar}
              edge="start"
              className={clsx(classes.menuButton, sideBarOpen && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Persistent drawer
          </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={sideBarOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={collapseSidebar}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {[['Morpion', 'tic-tac-toe'], ['Formulaire', 'form'], ['Send email', 'email'], ['Drafts', 'drafts']].map(([text, route], index) => (
              <ListItem component={RouterLink} to={route} button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: sideBarOpen,
          })}
        >
          <div className={classes.drawerHeader} />
          <Switch>
            <Route path="/tic-tac-toe">
              <React.Suspense fallback={<div>Chargement...</div>}>
                <TicTacToe />
              </React.Suspense>
            </Route>
            <Route path="/form">
              <React.Suspense fallback={<div>Chargement...</div>}>
                <Form />
              </React.Suspense>
            </Route>
            <Route path="/email">
              <React.Suspense fallback={<div>Chargement...</div>}>
                <Email />
              </React.Suspense>
            </Route>
            <Route path="/drafts">
              <React.Suspense fallback={<div>Chargement...</div>}>
                <Drafts />
              </React.Suspense>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
