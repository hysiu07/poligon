import React, { Component } from 'react';
import { UserInfo } from './contextUser';
import withData from '../withData';

class Movies extends Component {
	static contextType = UserInfo;
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3>Movies-class component</h3>
				<p>{this.context.name}</p>
				<p>{this.context.age}</p>
				<p>{this.context.email}</p>
				<h4>HoC</h4>
				<p>{this.props.city}</p>
				<p>{}</p>
			</div>
		);
	}
}
export default withData(Movies);
