import React from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../../firebase/firebase';

const Login = () => {
	const history = useHistory();
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const login = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push('/');
			})
			.catch((e) => alert(e.message));
	};

	const register = (e) => {
		e.preventDefault();

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push('/');
			})
			.catch((e) => alert(e.message));
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/800px-Amazon.com-Logo.svg.png"
					alt="amazon-logo"
					className="login__logo"
				/>
			</Link>

			<div className="login__container">
				<h1>Log In</h1>
				<form onSubmit={login}>
					<h5>E-mail</h5>
					<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
					<h5>Password</h5>
					<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					<button type="submit" onClick={login} className="login__signinbutton">
						Sign In
					</button>
				</form>
				<p>
					By Signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Policy. By
					continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
				</p>
				<button className="login__signupbutton" onClick={register}>
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
};

export default Login;
