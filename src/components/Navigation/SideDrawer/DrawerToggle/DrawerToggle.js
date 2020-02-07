import React from 'react'
import classes from './drawerToggle.module.css'

export default function DrawerToggle(props) {
    return (
        <div className={classes.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
