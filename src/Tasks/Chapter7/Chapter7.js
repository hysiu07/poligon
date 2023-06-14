import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './chapter7.scss';
import { PassContext } from './context';





export default class Chapter7 extends Component {
	static contextType = PassContext;
	constructor(props) {
		super(props);
		this.state = {
			passUser: '',
			fail: '',
			show: false,
		};
	}

	handlerCheckPass = (e) => {
		const { passUser } = this.state;

		e.preventDefault();

		if (this.context !== passUser) {
			this.setState({ fail: 'Pass is not correct' });
		} else if (this.context === passUser) {
			this.setState({ fail: '' });
			this.setState({ show: true });
		}
	};

	render() {
		const { show } = this.state;

		return (
			<div className='chapter7'>
				<h2>Chapter 7 Task</h2>
				
				{!show && (
					<div className='container-chapter7'>
						<label htmlFor='passphrase'>
							Pass:
							<input
								type='text'
								name='pass'
								onChange={(e) => {
									this.setState({ passUser: e.target.value });
								}}
							/>
						</label>
						<button onClick={this.handlerCheckPass}>Entry</button>
						{<p>{this.state.fail}</p>}
					</div>
				)}
				{show && (
					<div>
						<h1 className='hello'>Hello</h1>
						<Link to={'/tasks/movies'}> Movies</Link>
						<Link to={'/tasks/places'}> Places</Link>
					</div>
				)}
			</div>
		);
	}
}
