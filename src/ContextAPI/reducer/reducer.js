export const initialState = {
	basket: [],
	user: null
};

export const getBasketTotal = basket => basket?.reduce((amount , item) => item.price + amount, 0); 

export const reducer = (state, action) => {
	switch (action.type) {

		case  "SET_USER" :
			return {
				...state,
				user : action.user
			}
		case 'ADD_TO_BASKET':
			//logic to add items to basket
			return {
				...state,
				basket: [ ...state.basket, action.item ]
			};
		case 'REMOVE_FROM_BASKET':
			//logic to remove items from basket

			//copy of basket
			let newBasket = [ ...state.basket ];

			//finding the index
			const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

			newBasket.splice(index, 1);

			//optional for error handling

			// if (index === 0) {
			// 	newBasket.splice(index, 1);
			// } else {
			// 	console.warn(`Cannot remove item of id ${action.id}`);
			// }

			return { ...state, basket: newBasket };
		default:
			return state;
	}
};
