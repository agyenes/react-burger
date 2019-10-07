import React from 'react';

import Aux from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}: {props.ingredients[igKey]}</span>
                </li>
            );
        })

    return(
        <Aux>
            <h3>Your order</h3>
            <p>An amburget with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Go to checkout!</p>
        </Aux>
    );
};

export default orderSummary;