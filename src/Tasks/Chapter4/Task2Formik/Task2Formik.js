import React, { useCallback, useState } from 'react';
import { useFormik } from 'formik';
const validate = (values) => {
	const errors = {};

	if (values.name === '') {
		errors.name = 'You must enter your name!';
	}
	if (values.email === '') {
		errors.email = 'You must enter your email!';
	}
	if (values.message === '') {
		errors.message = 'You must enter your message!';
	}
	if (values.sex === '') {
		errors.sex = 'You must enter your sex!';
	}
	if (values.rulls === false) {
		errors.rulls = 'You must approve rulls!';
	}
	return errors;
};

function Task2Formik() {
	const [confirmSubmit, setConfirmSubmit] = useState(false);
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
			sex: '',
			rulls: false,
		},
		validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values));
            setConfirmSubmit(true);
            formik.values.name = ''
            formik.values.email = ''
            formik.values.message = ''
            formik.values.sex = ''
		},
	});

	const nameError = formik.errors.name ? (
		<p className='border'>{formik.errors.name}</p>
	) : (
		''
	);
	const emailError = formik.errors.email ? (
		<p className='border'>{formik.errors.email}</p>
	) : (
		''
	);
	const messageError = formik.errors.message ? (
		<p className='border'>{formik.errors.message}</p>
	) : (
		''
	);
	const sexError = formik.errors.sex ? (
		<p className='border'>{formik.errors.sex}</p>
	) : (
		''
	);
	const rullsError = formik.errors.rulls ? (
		<p className='border'>{formik.errors.rulls}</p>
	) : (
		''
	);

	return (
		<div className='form-task2'>
			<form className='form-task2' onSubmit={formik.handleSubmit}>
				<input
					name='name'
					type='text'
					placeholder='name'
					value={formik.values.name}
					onChange={formik.handleChange}
					required
				/>
				{nameError}
				<input
					name='email'
					type='text'
					placeholder='e-mail'
					value={formik.values.email}
					onChange={formik.handleChange}
					required
				/>
				{emailError}
				<textarea
					name='message'
					placeholder='message'
					value={formik.values.message}
					onChange={formik.handleChange}
					required
				></textarea>
				{messageError}
				<label>Sex:</label>
				<label>Male</label>
				<input
					type='radio'
					name='sex'
					value='Male'
					onChange={formik.handleChange}
					required
				/>
				<label>Female</label>
				<input
					type='radio'
					name='sex'
					value='Female'
					onChange={formik.handleChange}
				/>
				{sexError}
				<label>Approve</label>
				<input
					type='checkbox'
					name='rulls'
					value={true}
					onChange={formik.handleChange}
					required
				/>
				{rullsError}
				<button type='submit'>Send!</button>
				{confirmSubmit && <p>Thanks for message!</p>}
			</form>
		</div>
	);
}

export default Task2Formik;
