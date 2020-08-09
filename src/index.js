import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './ContextAPI/StateProvider/StateProvider';
import { initialState, reducer } from './ContextAPI/reducer/reducer';

ReactDOM.render(
	<StateProvider initialState={initialState} reducer={reducer}>
		<App />
	</StateProvider>,
	document.getElementById('root')
);
