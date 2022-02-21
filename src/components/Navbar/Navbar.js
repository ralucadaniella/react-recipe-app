import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import {
  Nav,
  NavContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLogo,
  UserLinks,
} from "./NavbarElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import useStyles from "./styles";
import decode from "jwt-decode";

import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  //Navbar Toggle
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  //Desktop Menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // //Mobile Menu
  // const handleMobileMenuOpen = (e) => {
  //   setMobileMoreAnchorEl(e.currentTarget)
  // }
  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null)
  // }

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">RECIPE</NavLogo>
        <MobileIcon>
          <FontAwesomeIcon icon={faBars} />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/" className={classes.menuLink}>
              Recipes
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/" className={classes.menuLink}>
              Planning
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/" className={classes.menuLink}>
              Shopping
            </NavLinks>
          </NavItem>
          {user ? (
            <Toolbar className={classes.menuContainer}>
              <NavItem>
                <NavLinks to="/form">Create a Recipe</NavLinks>
              </NavItem>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account settings">
                  <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                    <Avatar
                      className={classes.avatar}
                      alt={user.result.name}
                      src={user.result.imageUrl}
                    >
                      {user.result.name.charAt(0)}
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                className={classes.menu}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 16,
                      height: 16,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  <UserLinks to="/profile">
                    <Avatar /> Profile
                  </UserLinks>
                </MenuItem>
                <MenuItem>
                  <UserLinks to="/account">
                    <Avatar /> My account
                  </UserLinks>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    {/* <Logout fontSize="small" /> */}
                    <Button
                      variant="contained"
                      className={classes.logout}
                      color="secondary"
                      onClick={logout}
                    >
                      Logout
                    </Button>
                  </ListItemIcon>
                </MenuItem>
              </Menu>
            </Toolbar>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          )}
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
