import React, { useState, useRef } from 'react';

import './Task2.css';

function Task2() {
	const inputName = useRef();
	const inputEmail = useRef();
	const inputMessage = useRef();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [sex, setSex] = useState('');
	const [confirm, setConfirm] = useState(false);

	const [errors, setErrors] = useState({
		name: '',
		email: '',
		message: '',
		sex: '',
		confirm: false,
	});

	const [confirmForm, setConfirmForm] = useState(false);
	console.log(confirm);
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const valueInput = (e) => {
		setName(inputName.current.value.trim());
		setEmail(inputEmail.current.value.trim());
		setMessage(inputMessage.current.value.trim());
		setSex(e.target.value);
	};
	const valueChecbox = () => {
		setConfirm(!confirm);
		console.log(confirm);
	};
	// validation
	const validation = () => {
		let validateErrors = {
			name: false,
			email: false,
			message: false,
			sex: false,
			confirm: false,
		};

		if (name === '') {
			validateErrors.name = true;
			setErrors((prevState) => {
				return { ...prevState, name: 'You must enter your name' };
			});
		} else {
			validateErrors.name = false;
			setErrors((prevState) => {
				return { ...prevState, name: '' };
			});
		}

		if (email === '') {
			validateErrors.email = true;
			setErrors((prevState) => {
				return { ...prevState, email: 'You must enter your email' };
			});
		} else {
			validateErrors.email = false;
			setErrors((prevState) => {
				return { ...prevState, email: '' };
			});
		}

		if (message === '') {
			validateErrors.message = true;
			setErrors((prevState) => {
				return { ...prevState, message: 'You must enter your message' };
			});
		} else {
			validateErrors.message = false;
			setErrors((prevState) => {
				return { ...prevState, message: '' };
			});
		}

		if (sex === '') {
			validateErrors.sex = true;
			setErrors((prevState) => {
				return { ...prevState, sex: 'You must enter your sex' };
			});
		} else if (validateErrors.sex === false) {
			setErrors((prevState) => {
				return { ...prevState, sex: '' };
			});
		}

		if (confirm === false) {
			validateErrors.confirm = true;
			setErrors((prevState) => {
				return { ...prevState, confirm: 'You must confirm rulls' };
			});
		} else if (confirm === true) {
			setErrors((prevState) => {
				return { ...prevState, confirm: '' };
			});
		}

		if (
			validateErrors.name === false &&
			validateErrors.email === false &&
			validateErrors.message === false &&
			validateErrors.sex === false &&
			validateErrors.confirm === false
		) {
			setConfirmForm(true);
			inputMessage.current.value = '';
			inputName.current.value = '';
			inputEmail.current.value = '';
		} else {
			setConfirmForm(false);
		}
	};

	return (
		<div className='form-task2'>
			<form className='form-task2' onSubmit={handleSubmit}>
				<input
					className={errors.name && 'border'}
					type='text'
					placeholder='name'
					onChange={valueInput}
					ref={inputName}
				/>
				{errors.name && <p>{errors.name}</p>}
				<input
					className={errors.email && 'border'}
					type='text'
					placeholder='e-mail'
					onChange={valueInput}
					ref={inputEmail}
				/>
				{errors.email && <p>{errors.email}</p>}
				<textarea
					className={errors.email && 'border'}
					name='message'
					placeholder='message'
					onChange={valueInput}
					ref={inputMessage}
				></textarea>
				{errors.message && <p>{errors.message}</p>}
				<label>Sex:</label>
				<label>Male</label>
				<input
					type='radio'
					name='sex'
					value='Male'
					checked={sex === 'Male'}
					onChange={valueInput}
				/>
				<label>Female</label>
				<input
					type='radio'
					name='sex'
					value='Female'
					checked={sex === 'Female'}
					onChange={valueInput}
				/>
				{errors.sex && <p className={errors.sex && 'border'}>{errors.sex}</p>}
				<label>Approve</label>
				<input type='checkbox' onChange={valueChecbox} />
				{errors.confirm && (
					<p className={errors.sex && 'border'}>{errors.confirm}</p>
				)}
				<button onClick={validation}>Send!</button>
				{confirmForm && <p>thanks for message</p>}
			</form>
		</div>
	);
}

export default Task2;
