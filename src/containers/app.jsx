import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { store } from '../redux';
import Cart from '../components/cart';

export const App = () =>
	<Provider store={store}>
		<BrowserRouter> 
		<div>
			<Route path="/" component={Cart}/>
		</div>
		</BrowserRouter>
	</Provider>;
