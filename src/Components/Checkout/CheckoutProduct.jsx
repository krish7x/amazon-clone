/* eslint-disable no-empty-pattern */
import React from 'react';
import './Checkout.css';
import { useStateValue } from '../../ContextAPI/StateProvider/StateProvider';

const CheckoutProduct = ({ id, title, price, rating, image }) => {
	const [ {}, dispatch ] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id
		});
	};

	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} alt="checkoutProductImg" />

			<div className="chechoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>

				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>

				<div className="checkoutProduct__rating">
					{Array(rating).fill().map((_) => (
						<span role="img" aria-label="jsx-a11y/accessible-emoji">
							⭐
						</span>
					))}
				</div>

				<button className="checkoutProduct__button" onClick={removeFromBasket}>
					Remove from basket
				</button>
			</div>
		</div>
	);
};

export default CheckoutProduct;
