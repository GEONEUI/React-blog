import './App.css';
import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import NavBar from './conponent/NavBar';
import routes from './routes';



function App() {

	return (
		<Router>
			<NavBar />
			<div className="container mt-3">
				<Switch>
					{routes.map((route) => {
						return <Route exact key={route.path} path={route.path} component={route.Component} />
					})}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
