import React, { useEffect } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import BuildIcon from '@material-ui/icons/Build';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import IconDashboard from '@material-ui/icons/Dashboard';
import IconShoppingCart from '@material-ui/icons/ShoppingCart';
import IconPeople from '@material-ui/icons/People';
import IconBarChart from '@material-ui/icons/BarChart';
import IconLibraryBooks from '@material-ui/icons/LibraryBooks';
import user from '../../assets/user.jpg';
import ellipsis from '../../assets/images/ellipsis_logo.png';
import { Link, NavLink } from 'react-router-dom';
import {
  Form,
} from 'react-bootstrap';

const AppMenu = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }
  const [selectedIndex, setSelectedIndex] = React.useState('');
  const [selectedSub, setselectedSub] = React.useState('');

  const handleClicks = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex('');
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <div className="mainMenu">
    <List component="nav" className={classes.appMenu} disablePadding>
      <div className="side-menu-top">
        <div className="logo">
          <Link to="/">
            <img src={ellipsis} alt="Ellipsis" />
          </Link>
        </div>
        {/* <div className="avatar">
          <img src={user} alt="user" />
        </div> */}
        <div className="userDrop p-3">
          <p className="m-0">Switch Workspace</p>
        <Form className="p-0">
                <Form.Group className="mb-4" controlId="formBasicPassword">
                <select aria-label="Default select example" className="form-control">
                  <option>Select industry type</option>
                    <option>Ecommerce</option>
                    <option value="1">SaaS</option>
                    <option value="2">Enterprise Tech
                    </option>
                     <option value="3">Blockchain/ Crypto
                    </option>
                    <option>Fintech</option>
                    <option>Edtech</option>
                    <option>Martech</option>
                   </select>
                  </Form.Group>
                  </Form>
        </div>

      </div>
      {props.menuData.map((data, index) => {
        return (
          <>
            <ListItem
              button
              className={classes.menuItem}
              onClick={() => {
                handleClicks(index);
              }}
            >   {data.subMenus && data.subMenus.length > 0 ? (
              <a className="nav-link" href="javascript:void(0);"  exact={data.exact} activeClassName="active">
                <ListItemIcon className={classes.menuItemIcon}>
                  {data.icon}
                </ListItemIcon>
                <ListItemText primary={data.name} />
                {data.subMenus && data.subMenus.length > 0 ? (
                  <React.Fragment>
                    {index === selectedIndex ? (
                      <IconExpandLess />
                    ) : (
                      <IconExpandMore />
                    )}
                  </React.Fragment>
                ) : null}
              </a>

              ) : 
              <NavLink to={data.to} exact={data.exact} activeClassName="active">
                <ListItemIcon className={classes.menuItemIcon}>
                  {data.icon}
                </ListItemIcon>
                <ListItemText primary={data.name} />
                {data.subMenus && data.subMenus.length > 0 ? (
                  <React.Fragment>
                    {index === selectedIndex ? (
                      <IconExpandLess />
                    ) : (
                      <IconExpandMore />
                    )}
                  </React.Fragment>
                ) : null}
              </NavLink>
              }
            </ListItem>

            {data.subMenus && data.subMenus.length > 0 ? (
              <Collapse
                in={index === selectedIndex}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {data.subMenus.map((sub, index) => {
                    return (
                      <List component="div" disablePadding>
                        <NavLink to={sub.to} exact={sub.exact} activeClassName="active">
                          <ListItem button className={classes.menuItem}>
                            <ListItemText inset primary={sub.name} />
                          </ListItem>
                        </NavLink>
                      </List>
                    );
                  })}
                </List>
              </Collapse>
            ) : null}
          </>
        );
      })}

    </List>
    <ul className="nav bottomLine flex-column">
      <p className="mb-0  "><a className="ml-0" href="mailto:support@ellipsis-ai.com">support@ellipsis-ai.com</a></p>
      <p className="mb-0  "><Link to="/privacy_policy">Privacy Policy</Link></p>
      <p className="mb-0  "><Link to="/terms_conditions">Terms and Conditions</Link></p>
    </ul>
        </div>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#fff',
    },
    menuItem: {
      color: '#fff',
      fontSize: '13px',
      paddingLeft: '30px',
    },
  })
);

export default AppMenu;
