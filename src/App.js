import React, { Component } from 'react';
import './App.css';

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
		this.setState({score:8})
	}
	render() {
		const { header, intro } = this.props;
		return (
			<div style={styles}>
				<h2>{header}</h2>
				<p style={styles.color}>{intro}</p>
				<p>{`Mój wynik to ${this.state.score}`}</p>
				<p>{`Dzisiejsza data ${this.state.date}`}</p>
			</div>
		);
	}
}

const data = [
	{
		header: 'nagłówek 1',
		intro: 'Intro 1',
	},
	{
		header: 'nagłówek 2',
		intro: 'Intro 2',
	},
	{
		header: 'nagłówek 3',
		intro: 'Intro 3',
	},
];

function App() {
	return (
		<div>
			{data.map((el, index) => {
				return <News key={index} header={el.header} intro={el.intro} />;
			})}
		</div>
	);
}

export default App;
