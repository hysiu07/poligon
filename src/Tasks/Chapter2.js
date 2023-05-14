import React, { Component, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// Task1
const posts = [
	{
		id: 1,
		title: 'Pilne: Co to był za dzień!',
		intro: 'Tego świat jeszcze nie widział',
	},
	{
		id: 2,
		title: 'Wszyscy zazdroszą Polakom!',
		intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił',
	},
	{
		id: 3,
		title: 'Adam Małysz Zgolił wąs',
		intro:
			'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy',
	},
];

const stylesChapter2 = {
	backgroundColor: 'gold',
	color: 'black',
	fontSize: 30,
	textAlign: 'center',
	border: {
		border: 'black 1px solid',
	},
};

class BlogTitle extends Component {
	render() {
		return (
			<div>
				<h2>{this.props.title}</h2>
			</div>
		);
	}
}

// Task2
const uuid = uuidv4();

// Task3

class Chapter2Task31 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timer: 0,
		};
	}
	componentDidMount() {
		setInterval(() => {
			this.setState({ timer: this.state.timer + 1 });
		}, 1000);
	}
	render() {
		return (
			<div>
				<p>
					timer class komponent <span>{this.state.timer}</span>
				</p>
			</div>
		);
	}
}

function Chapter2Task32() {
	const [second, setSecond] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setSecond((prevSecond) => prevSecond + 1);
		}, 1000);
	}, []);

	return (
		<div>
			<p>
				timer function component <span>{second}</span>
			</p>
		</div>
	);
}

function Chapter2() {
	return (
		<div style={stylesChapter2}>
			{posts.map((el, index) => {
				return (
					<div key={index} style={stylesChapter2.border}>
						<BlogTitle title={el.title} />
						<p>{`${el.intro.substring(0, 25)} ...`}</p>
					</div>
				);
			})}

			<p>UUID Generator: {uuid}</p>
			<Chapter2Task31 />
			<Chapter2Task32 />
		</div>
	);
}
export default Chapter2;
