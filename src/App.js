import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';

import News from './Components/News';
import Header from './Components/Header';
import Articles from './Pages/Articles';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Form from './Pages/Form';
import Home from './Pages/Home';
import Tasks from './Tasks';

function App() {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to='/'>home</Link>
					</li>
					<li>
						<Link to='/header'>header</Link>
					</li>
					<li>
						<Link to='/articles'>articles</Link>
					</li>
					<li>
						<Link to='/news'>news</Link>
					</li>
					<li>
						<Link to='/footer'>footer</Link>
					</li>
					<li>
						<Link to='/tasks'>tasks</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/header' element={<Header />} />
				<Route path='/form' element={<Form />} />
				<Route
					path='/articles'
					element={
						<Content>
							<Articles />
						</Content>
					}
				/>
				<Route path='/news' element={<News />} />
				<Route path='/tasks' element={<Tasks />} />
				<Route path='/footer' element={<Footer />} />
			</Routes>
		</div>
	);
}

export default App;
