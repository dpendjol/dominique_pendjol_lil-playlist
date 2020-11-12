import React from 'react'

import './App.css';
import Container from './components/Container'
import Header from './components/Header'

import Nav from './components/Nav'
import About from './components/About'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {

	return (
		<Router>
			<div className="App">
				<Header />
				<Nav />
				<Switch>
					<Route exact path="/" component={Container} />
					<Route exact path="/about" component={About} />
				</Switch>
			</div>
		</Router>
  	);
}

export default App;
