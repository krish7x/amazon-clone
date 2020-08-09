import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../../ContextAPI/StateProvider/StateProvider';
import { auth } from '../../firebase/firebase';

const Navbar = () => {
	const [ { basket, user } ] = useStateValue();
	
	const signout = () => {
		if(user) {
			auth.signOut()
		}
	}

	return (
		<nav className="navbar">
			<Link to="/">
				<img
					className="navbar__img"
					src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="amazon-logo"
				/>
			</Link>

			<div className="navbar__search">
				<input type="text" className="navbar__searchBox" />
				<SearchIcon className="navbar__searchIcon" />
			</div>
			<div className="navbar__navItems">
				<Link to={user ? "/"  : "/login"} className="navbar__navLinks">
					<div className="navbar__navOptions">
						<span className="navOptions__one">Hello {user?.email} </span>
						<span onClick = {signout} className="navOptions__two">{user ? "Sign Out" : "Sign In"}</span>
					</div>
				</Link>
				<Link to="/" className="navbar__navLinks">
					<div className="navbar__navOptions">
						<span className="navOptions__one">returns</span>
						<span className="navOptions__two">& Orders</span>
					</div>
				</Link>
				<Link to="/" className="navbar__navLinks">
					<div className="navbar__navOptions">
						<span className="navOptions__one">Your</span>
						<span className="navOptions__two">Prime</span>
					</div>
				</Link>
				<Link to="/checkout" className="navbar__navLinks">
					<div className="navbar__navCheckout">
						<ShoppingBasketIcon />
						<span className="navOptions__one navOptions__checkoutCount">{basket && basket.length}</span>
					</div>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
