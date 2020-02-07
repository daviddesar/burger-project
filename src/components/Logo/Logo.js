import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './logo.module.css'

export default function Logo() {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="myLogo" />
        </div>
    )
}
