import React, { useState } from 'react';
import './FormTask.css';
function FormTask() {
	const [disabledPassword, setDisabledPassword] = useState(true);

	const [errors, setErrors] = useState({
		userName: '',
		email: '',
		password: '',
		repeatPassword: '',
	});

	const handlerSubmit = (e) => {
		e.preventDefault();
		const { name, email, password, repeatPassword } = e.target.elements;

		const data = {
			name: name.value.trim(),
			email: email.value.trim(),
			password: password.value.trim(),
			repeatPassword: repeatPassword.value.trim(),
		};
		console.log(data.name.length);
		if (data.name.length < 2) {
			setErrors((prevErrors) => {
				return {
					...prevErrors,
					userName: 'Your user name is to short',
				};
			});
		} else {
			setErrors((prevErrors) => {
				return {
					...prevErrors,
					userName: '',
				};
			});
		}

		if (data.password.search(/[a-z]/) < 0) {
			setErrors((prevErrors) => {
				return {
					...prevErrors,
					password: 'Your password needs a lower case letter',
				};
			});
		} else if (data.password.search(/[A-Z]/) < 0) {
			setErrors((prevErrors) => {
				return {
					...prevErrors,
					password: 'Your password needs an uppser case letter',
				};
			});
		} else if (data.password.search(/[!@#%^&*()|';]/) < 0) {
			setErrors((prevErrors) => {
				return {
					...prevErrors,
					password: 'Your password need min one special charakter',
				};
			});
		} else if (data.password.length <= 8) {
			setErrors((prevErrors) => {
				return {
					...prevErrors,
					password: 'Your password must be longer',
				};
			});
		} else {
			setErrors((prevErrors) => {
				return {
					...prevErrors,
					password: '',
				};
			});
		}

		if (data.repeatPassword !== data.password) {
			setErrors((prevErrors) => {
				return {
					...prevErrors,
					repeatPassword: 'Your passwords is not the same',
				};
			});
		} else {
			setErrors((prevErrors) => {
				return {
					...prevErrors,
					repeatPassword: '',
				};
			});
		}
	};
	const handlerBlurEmail = (e) => {
		const email = e.target.value;

		if (email !== '') {
			setDisabledPassword(false);
		} else {
			setDisabledPassword(true);
		}
	};

	return (
		<div>
			<form method='POST' className='form-task1' onSubmit={handlerSubmit}>
				<label htmlFor='name'>
					Name User:
					<input type='text' name='name' placeholder='Name User' />
					<p className='error-red'>{errors.userName}</p>
				</label>
				<label htmlFor='email'>
					Email:
					<input
						type='email'
						name='email'
						placeholder='Email'
						onBlur={handlerBlurEmail}
					/>
				</label>
				<label htmlFor='password'>
					Password:
					<input
						type='password'
						name='password'
						placeholder='Password'
						disabled={disabledPassword}
					/>
					<p className='error-red'>{errors.password}</p>
				</label>
				<label htmlFor='repeat-password'>
					Repeat Password:
					<input
						type='password'
						name='repeatPassword'
						placeholder='Repeat Password'
						disabled={disabledPassword}
					/>
					<p className='error-red'>{errors.repeatPassword}</p>
				</label>
				<button type='submit'>Send!</button>
			</form>
		</div>
	);
}
export default FormTask;
