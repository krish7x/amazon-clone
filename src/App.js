/* eslint-disable no-empty-pattern */
import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import { auth } from './firebase/firebase';
import { useStateValue } from './ContextAPI/StateProvider/StateProvider';

function App() {
	const [ {}, dispatch ] = useStateValue();

	useEffect(
		() => {
			const unsubscribe = auth.onAuthStateChanged((authUser) => {
				if (authUser) {
					//logged in

					dispatch({
						type: 'SET_USER',
						user: authUser
					});
				} else {
					//logged out

					dispatch({
						type: 'SET_USER',
						user: null
					});
				}
			});

			return () => {
				unsubscribe();
			};
		},
		[ dispatch ]
	);

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route exact path="/Checkout">
						<Navbar />
						<Checkout />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>

					<Route exact path="/">
						<div className="app__homepage">
							<Navbar />
							<Homepage />
						</div>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
