import React from 'react';
import "./Checkout.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../../ContextAPI/StateProvider/StateProvider';
import { getBasketTotal } from '../../ContextAPI/reducer/reducer';


const Subtotal = () => {
    const [{basket}] = useStateValue();
	return (
		<div className = "subtotal">
            <CurrencyFormat 
            renderText = {() => (
                <>
                    <p className = "subtotal__text">
                        Subtotal ({basket.length} items) : <strong> $ { getBasketTotal(basket)  }</strong>
                    </p>

                    <small className = "subtotal__gift">
                        <input type="checkbox"/>
                        This order contains gift
                    </small>
                </>
            )}
            decimalScale = {2}
            displayType = {"text"}
            thousandSeparator = {true}
            prefix = {"$"}
            />
			<button>Proceed to checkout</button>
		</div>
	);
};

export default Subtotal;
