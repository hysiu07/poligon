import React from 'react';
import './App.css';

import Chapter2 from './Tasks/Chapter2';
import News from './Components/News';
import Header from './Components/Header';



const data = [
	{ id: 1, author: 'Jan Brzęczek', header: 'nagłówek 1', intro: 'Intro 1' },
	{ id: 2, author: 'Jan Brzęczek', header: 'nagłówek 2', intro: 'Intro 2' },
	{ id: 3, author: 'Jan Brzęczek', header: 'nagłówek 3', intro: 'Intro 3' },
];

function App() {
	return (
		<div>
			<Header />
			{data.map((el, index) => {
				return (
					<News
						key={index}
						header={el.header}
						intro={el.intro}
						author={el.author}
					/>
				);
			})}
			<Chapter2 />
		</div>
	);
}

export default App;
