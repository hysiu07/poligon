import React, { Component } from 'react';
function withData(WrappedComponent) {
	return class  extends Component {
		constructor(props) {
			super(props);
			this.state = {
				city: 'Kopydłowo',
				apiDate: [],
			};
		}
		componentDidMount() {
			this.setState({ apiDate: ['Eliza', 'Daniel'] });
		}
		render() {
			return (
				<div>
					<WrappedComponent
						city={this.state.city}
						apiDate={this.state.apiDate}
					/>
				</div>
			);
		}
	};
}

export default withData;
