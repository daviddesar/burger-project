import React from 'react'
import Aux from '../../../hoc/AuxHoc'
import Button from '../../UI/Button/Button'

export default function OrderSummary(props) {
    const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
        return (<li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
        </li>)
    })
    return (
        <Aux>
            <h3>Your order: </h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
            <Button btnType="Danger" clicked={props.purchaseCancel}>Cancel</Button>
        </Aux>
    )
}