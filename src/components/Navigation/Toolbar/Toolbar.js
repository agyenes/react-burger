import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle click={props.drawerToggleClicked}/>
        <div className={classes.Logo}>
            <Logo />            
        </div>
        <NavigationItems isAuthenticated={props.isAuth} className={classes.DesktopOnly}/>
    </header>
);

export default toolbar;