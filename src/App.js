import React from 'react';
import './App.css';

import Chapter2 from './Tasks/Chapter2';
import News from './Components/News';
import Header from './Components/Header';
import Articles from './Pages/Articles';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Chapter3 from './Tasks/Chapter3';

function App() {
	return (
		<div>
			<Header />
			<Content>
				<Articles />
			</Content>
			<News />
			<Chapter2 />
			<Chapter3/>
			<Footer />
		</div>
	);
}

export default App;
