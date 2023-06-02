import React, { useState, useRef, createRef } from 'react';
import FormTask from './FormTask';

import './Chapter6.css';

function Chapter6() {
	// const [data, setData] = useState({
	// 	name: '',
	// 	surname: '',
	// 	email: '',
	// 	hobby: '',
	// });

	// const handleCheckInput = (e) => {
	//     e.preventDefault();
	//     const target = e.target;
	//     const name = target.name;

	//     setData({
	//     	...data,
	//     	[name]: target.value,
	//     });

	// }
	const nameRef = useRef(null);
	const errorNameRef = useRef(null);

	const submit = (e) => {
		e.preventDefault();

		const { name, surname, email, hobby } = e.target.elements;

		const data = {
			name: name.value,
			surname: surname.value,
			email: email.value,
			hobby: hobby.value,
		};
		if (nameRef.current) {
			const nameValue = nameRef.current.value;
			if (nameValue.length < 3) {
				errorNameRef.current.textContent = 'Błąd';
				errorNameRef.current.className = 'error';
			}
		}
	};
	return (
		<div>
			<form className='chapter6-form' onSubmit={submit} method='GET'>
				<h2>Registration form</h2>
				<p>
					{/* Name:{data.name} {data.surname} email: {data.email} hobby:{' '}
					{data.hobby} */}
				</p>
				<label>
					Name:
					<input type='text' name='name' ref={nameRef} />
					<p ref={errorNameRef}></p>
				</label>
				<label>
					Surname:
					<input type='text' name='surname' />
				</label>
				<label>
					Email:
					<input type='email' name='email' />
				</label>
				<label>
					Hobby:
					<select name='hobby'>
						<option value='sport'>sport</option>
						<option value='colect-stamps'>colect stamps</option>
						<option value='cheest'>cheest</option>
					</select>
				</label>
				<button type='submit'>submit</button>
			</form>
			<FormTask />
		</div>
	);
}

export default Chapter6;
