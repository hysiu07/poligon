import React, { useState, useRef } from 'react';
import Task2 from './Task2';
import Task2Formik from './Task2Formik';

function Chapter4() {
	const [value, setValue] = useState(0);

	const inputValue = useRef();
	const tipValue = useRef();

	const calculateValue = (e) => {
		e.preventDefault();
		if (tipValue.current.value === '25') {
			setValue(inputValue.current.value * 1 + inputValue.current.value * 0.25);
		} else if (tipValue.current.value === '20') {
			setValue(inputValue.current.value * 1 + inputValue.current.value * 0.2);
		} else if (tipValue.current.value === '10') {
			setValue(inputValue.current.value * 1 + inputValue.current.value * 0.1);
		} else if (tipValue.current.value === '5') {
			setValue(inputValue.current.value * 1 + inputValue.current.value * 0.05);
		}
	};

	return (
		<div>
			{value === 0 ? (
				<form>
					<label>Kwota do zapłaty netto:</label>
					<input type='number' ref={inputValue} />
					<label> tip: </label>
					<select name='' id='' ref={tipValue}>
						<option value='25'>25%</option>
						<option value='20'>20%</option>
						<option value='10'>10%</option>
						<option value='5'>5%</option>
					</select>
					<button onClick={calculateValue}>Calculate!</button>
				</form>
			) : (
				value
			)}

			<Task2 />
			<Task2Formik />
		</div>
	);
}
export default Chapter4;
