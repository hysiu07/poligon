import React, { Component } from 'react';
import './App.css';
import Chapter2 from './Tasks/Chapter2';

import Header from './Components/Header/Header';

const styles = {
	backgroundColor: 'gray',
	border: 'lime 1px solid',
	padding: 10,
	color: {
		color: 'red',
	},
};

// function News(props) {
// 	const { header, intro } = props;

// 	return (
// 		<div style={styles}>
// 			<h2>{header}</h2>
// 			<p style={styles.color}>{intro}</p>
// 		</div>
// 	);
// }

class News extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			score: 5,
		};
	}
	componentDidMount() {
		this.setState({ score: 8 });
	}
	render() {
		const { header, intro, author } = this.props;
		return (
			<div style={styles}>
				<h2>{header}</h2>
				<p style={styles.color}>{intro}</p>
				<p>{`Author: ${author}`}</p>
				<p>{`Mój wynik to ${this.state.score}`}</p>
				<p>{`Dzisiejsza data ${this.state.date}`}</p>

			</div>
		);
	}
}

const data = [
	{ id: 1, author: 'Jan Brzęczek', header: 'nagłówek 1', intro: 'Intro 1' },
	{ id: 2, author: 'Jan Brzęczek', header: 'nagłówek 2', intro: 'Intro 2' },
	{ id: 3, author:'Jan Brzęczek', header: 'nagłówek 3', intro: 'Intro 3' },
];

function App() {
	return (
		<div>
			<Header />
			{data.map((el, index) => {
				return <News key={index} header={el.header} intro={el.intro} author={el.author} />;
			})}
			<Chapter2 />
		</div>
	);
}

export default App;
