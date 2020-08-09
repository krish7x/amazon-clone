/* eslint-disable no-empty-pattern */
import React from 'react';
import './Product.css';
import { useStateValue } from '../../ContextAPI/StateProvider/StateProvider';

const Product = ({ id, title, price, rating, image }) => {
	const [ {}, dispatch ] = useStateValue();

	const addToBasket = () => {
		//add items to basket

		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id,
				title,
				price,
				rating,
				image
			}
		});
	};
	return (
		<div className="product">
			<div className="product__info">
				<p className="product__title">{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating).fill().map((_, index) => {
						return (
							<span key={index} role="img" aria-label="jsx-a11y/accessible-emoji">
								⭐
							</span>
						);
					})}
				</div>
			</div>
			<img className="product__image" src={image} alt={title} />
			<button className="product__button" onClick={addToBasket}>
				Add to basket
			</button>
		</div>
	);
};

export default Product;
