import React from "react";
import useStyles from "./styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/commerce.png";
const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position={`fixed`} className={classes.appBar}>
      <Toolbar>
        <Typography variant={`h6`} className={classes.title} color={`inherit`}>
          <img
            src={logo}
            alt="Commerce.js"
            height={"25px"}
            className={classes.image}
          />
          Commerce.js
        </Typography>
        <div className={classes.grow}></div>
        <div className={classes.button}>
          <IconButton aria-label="Show cart items" color="inherit">
            <Badge badgeContent={2} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
