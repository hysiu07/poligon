import React, { useState, useRef } from 'react';

function Form() {
	const inputSurname = useRef();

	// const [formData, setFormData] = useState({
	// 	name: '',
	// 	surname: '',
	// 	age: '',
	// });

	// new hook

	function useInput(initialValue = '') {
		const [value, setValue] = useState('');

		const handleChange = (e) => {
			setValue(e.target.value);
		};
		return [value, handleChange];
	}
	const [name, handleNameChange] = useInput('');
	const [surname, handleSurNameChange] = useInput('');
	const [age, handleAgeChange] = useInput('');

	const handleClick = () => {
		console.log('React button');
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const focusSurname = () => {
		inputSurname.current.focus();
		inputSurname.current.value = 'Kowalski';
		inputSurname.current.style.border = 'red 1px solid';
	};

	// const handleChange = (e) => {
	// 	const target = e.target;
	// 	const name = target.name;
	// 	setFormData({
	// 		...formData,
	// 		[name]: target.value,
	// 	});
	// };
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<input
					type='text'
					name='name'
					placeholder='Name'
					onChange={handleNameChange}
				/>
			</div>
			<div>
				<input
					type='text'
					name='surname'
					placeholder='Surname'
					ref={inputSurname}
					onChange={handleSurNameChange}
				/>
			</div>
			<div>
				<input
					type='text'
					name='age'
					placeholder='Age'
					onChange={handleAgeChange}
				/>
			</div>
			<button onClick={handleClick}>React button</button>
			<button onClick={focusSurname}>Ref Surname</button>
		</form>
	);
}

// class Form extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleChange = this.handleChange.bind(this);
// 	}
// 	state = {
// 		name: '',
// 		surname: '',
// 		age: '',
// 	};
// 	handleClick() {
// 		console.log('React button');
// 	}
// 	handleSubmit(e) {
// 		e.preventDefault();
// 	}
// 	handleChange = (event) => {
// 		// event.target.value
// 		const keyName = event.target.name
// 		this.setState({ [keyName]: event.target.value });
// 	};
// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<div>
// 					<input type='text' placeholder='Name' onChange={this.handleChange} />
// 				</div>
// 				<div>
// 					<input
// 						type='text'
// 						placeholder='Surname'
// 						onChange={this.handleChange}
// 					/>
// 				</div>
// 				<div>
// 					<input type='text' placeholder='Age' onChange={this.handleChange} />
// 				</div>

// 				<button onClick={this.handleClick}>React button</button>
// 			</form>
// 		);
// 	}
// }

export default Form;
