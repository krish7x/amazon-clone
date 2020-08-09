import React from 'react';
import { useStateValue } from '../../ContextAPI/StateProvider/StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = () => {
	const [ { basket } ] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/AugART/Affordability/Eng/1500x180_pc_header_start-shopping_englishNEW.jpg"
					alt="checkout-ad"
				/>
				{basket.length === 0 ? (
					<div className="checkout__title">
						<h1>There is no product please add products to continue with the purchase</h1>
					</div>
				) : (
					<div className="checkout__product">
						<div className="checkout__title">
							<h1>Your products</h1>
						</div>
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								price={item.price}
								image={item.image}
								rating={item.rating}
							/>
						))}
					</div>
				)}
			</div>
			{basket.length > 0 && (
				<div className="checkout__right">
					<Subtotal />
				</div>
			)}
		</div>
	);
};

export default Checkout;
