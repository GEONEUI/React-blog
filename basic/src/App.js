import './App.css';
import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';

import NavBar from './conponent/NavBar';
import CreatPage from './pages/CreatPage';
import EditPage from './pages/EditPage';
import Listpage from './pages/Listpage';
import HomePage from './pages/HomePage';


function App() {

	return (
		<Router>
			<NavBar />
			<div className="container">
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="/blogs" exact>
						<Listpage />
					</Route>
					<Route path="/blogs/create" exact>
						<CreatPage />
					</Route>
					<Route path="/blogs/edit" exact>
						<EditPage />
					</Route>
				</Switch>
			</div>

		</Router>


	);
}

export default App;
