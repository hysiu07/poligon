import React, { useState } from 'react';
import './Employees.css';

function Employees(employees) {
	const workers = employees.employees;

	const [age, setAge] = useState('');
	const [post, setPost] = useState('');
	const [sallary, setSallary] = useState('');

	return (
		<div className='employees'>
			<div className='employees-list'>
				{workers.map((employee) => {
					return (
                        <p className='employee' onClick={() => {
                            setAge(employee.age)
                            setPost(employee.post)
                            setSallary(employee.sallary)
                        }}>
							{employee.name} {employee.lastName}
						</p>
					);
				})}
			</div>
			<div className='employees-info'>
				<p>Post: {post}</p>
				<p>Age: {age}</p>
				<p>Sallary: {sallary} USD</p>
			</div>
		</div>
	);
}
export default Employees;
