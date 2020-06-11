import React from 'react';
import { ListItem, ListItemText, List, Drawer, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Menu = (props) =>
  <Drawer open={props.drawerOpen} onClose={props.handleToggle}>
    <div
      tabIndex={0}
      role="button"
      onTouchTap={props.handleToggle}
      onKeyDown={props.handleToggle}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/customgenerator">
          <ListItemText primary="Personalizado" />
        </ListItem>
        <ListItem button component={Link} to="/edadftgamess">
          <ListItemText primary="EDA DFT" />
        </ListItem>
        <ListItem button component={Link} to="/edamp2gamess">
          <ListItemText primary="EDA MP2" />
        </ListItem>

      </List>
    </div>
  </Drawer>
  ;
