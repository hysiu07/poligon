import React from 'react';
import { useState } from 'react';
import './FormSteps.css';
import ReCAPTCHA from 'react-google-recaptcha';

function FormSteps() {
    const [steps, setSteps] = useState(1);
    const [send, setSend] = useState(true)
	const [data, setData] = useState({
		name: '',
		age: '',
		hobby: '',
	});

	const handleinput = (e) => {
		const target = e.target;
		const name = target.name;
		setData((prevData) => {
			return { ...prevData, [name]: target.value };
		});
		console.log(data);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('wysłano!');
    };
    const sendEnabled = () => {
        setSend(false)
    }

	return (
		<div className='form-step-container'>
			<form className='form-step' method='POST' onSubmit={handleSubmit}>
				<h2>Your info:</h2>
				{steps === 1 && (
					<div className='step'>
						<label htmlFor='name'>
							Name:
							<input
								type='text'
								name='name'
								onChange={handleinput}
								value={data.name}
							/>
						</label>
						<button
							disabled={data.name === '' && 'true'}
							onClick={() => {
								setSteps(2);
							}}
						>
							Next
						</button>
					</div>
				)}
				{steps === 2 && (
					<div className='step'>
						<label htmlFor='age'>
							Age:
							<input
								type='number'
								name='age'
								onChange={handleinput}
								value={data.age}
							/>
						</label>
						<button
							onClick={() => {
								setSteps(1);
							}}
						>
							Prev
						</button>
						<button
							disabled={data.age === '' && 'true'}
							onClick={() => {
								setSteps(3);
							}}
						>
							Next
						</button>
					</div>
				)}
				{steps === 3 && (
					<div className='step'>
						<label htmlFor='age'>
							Hobby:
							<select name='hobby' onChange={handleinput} value={data.hobby}>
								<option value='sport'>sport</option>
								<option value='fishing'>fishing</option>
								<option value='cooking'>cooking</option>
							</select>
						</label>
						<button
							onClick={() => {
								setSteps(2);
							}}
						>
							Prev
						</button>
						<button
							disabled={data.age === '' && 'true'}
							onClick={() => {
								setSteps(4);
							}}
						>
							Next
						</button>
					</div>
				)}
				{steps === 4 && (
					<div className='step'>
						<p> Name: {data.name}</p>
						<p> Age: {data.age}</p>
						<p> Hobby: {data.hobby}</p>
						<button
							onClick={() => {
								setSteps(3);
							}}
						>
							Prev
						</button>
						<button type='submit' disabled={send}>Send!</button>
						<ReCAPTCHA
							sitekey='6LfcbWQmAAAAAPf_iaT6SPeVxtg3l0sgpCICs0pf'
							onClick={sendEnabled}
						/>
						,
					</div>
				)}
			</form>
		</div>
	);
}
export default FormSteps;
