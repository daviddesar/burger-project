import React from 'react'
import classes from './buildControl.module.css'
import BuildControl from './BuildControl/BuildControl'

export default function BuildControls(props) {
    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' },
    ]
    return (
        <div className={classes.BuildControls}>
            <p>Burger Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemove(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button 
            className={classes.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.ordered}
            >{props.isAuth ? 'ORDER NOW' : 'SIGNUP TO ORDER'} </button>
        </div>
    )
}
