import React, { useState, useEffect } from 'react';
import './Task4.css';

function Task4() {
	// const getStorageValue = (key, defaultValue) => {
	// 	const saved = localStorage.getItem(key);
	// 	const initial = JSON.parse(saved);
	// 	return initial || defaultValue;
	// };

	// const useLocalStorage = (key, defaultValue) => {
	// 	const [value, setValue] = useState(() => {
	// 		return getStorageValue(key, defaultValue);
	// 	});

	// 	useEffect(() => {
	// 		localStorage.setItem(key, JSON.stringify(value));
	// 	}, [key, setValue]);

	// 	return [value, setValue];
	// };

	// const [sorage, setStorage] = useLocalStorage('key', '')

	// const valueStorage = JSON.parse(localStorage.expens)

	// console.log(valueStorage);

	let idElement = Date.now();
	const [expenses, setExpenses] = useState([]);
	const [revenue, setRevenue] = useState([
		{
			type: 'revenue',
			name: 'sellery',
			amount: 2000,
			category: 'revenue',
			id: 1,
		},
	]);

	const [expensesSum, setExpensesSum] = useState(0);
	const [revenueSum, setRevenueSum] = useState(0);

	const [allSum, setAllSum] = useState(0);

	const [formData, setFormData] = useState({
		type: '',
		name: '',
		amount: null,
		category: '',
		id: idElement,
	});

	useEffect(() => {
		localStorage.setItem('expens', JSON.stringify(expenses));
	}, [expenses]);
	useEffect(() => {
		const expenses = JSON.parse(localStorage.getItem('expens'));
		if (expenses) {
			setExpenses(expenses);
		}
	}, []);
	useEffect(() => {
		localStorage.setItem('revenue', JSON.stringify(revenue));
	}, [revenue]);
	useEffect(() => {
		const revenue = JSON.parse(localStorage.getItem('revenue'));
		if (revenue) {
			setRevenue(revenue);
		}
	}, []);

	const handleChange = (e) => {
		const target = e.target;
		const name = target.name;

		setFormData({
			...formData,
			[name]: target.value.trim(),
		});
	};

	const uppDateBudget = () => {
		if (formData.type === 'expenses') {
			setExpenses([...expenses, formData]);
			localStorage.setItem('próba', 'odswiez');
		} else {
			setRevenue([...revenue, formData]);
		}
		setFormData({
			...formData,
			id: Date.now(),
		});
		// localStorage.setItem('expens', JSON.stringify(expenses))
	};

	const submit = (e) => {
		e.preventDefault();
	};

	const deleteElement = (el) => {
		if (el.type === 'expenses') {
			setExpenses(
				expenses.filter((expens) => {
					return el.id !== expens.id;
				})
			);
		} else {
			setRevenue(
				revenue.filter((rev) => {
					return el.id !== rev.id;
				})
			);
		}
	};

	useEffect(() => {
		setExpensesSum(
			expenses.reduce((sum, currentPrice) => {
				return sum + currentPrice.amount * 1;
			}, 0)
		);
		setRevenueSum(
			revenue.reduce((sum, currentPrice) => {
				return sum + currentPrice.amount * 1;
			}, 0)
		);
	}, [expenses, revenue]);
	useEffect(() => {
		setAllSum(revenueSum - expensesSum);
	}, [expensesSum, revenueSum]);
	return (
		<div className='task4'>
			<div className='form-task4'>
				<p>expenses or revenue?</p>
				<form onSubmit={submit}>
					<label>
						expenses
						<input
							type='radio'
							name='type'
							value={'expenses'}
							onChange={handleChange}
						/>
					</label>
					<label>
						revenue
						<input
							type='radio'
							name='type'
							value={'revenue'}
							onChange={handleChange}
						/>
					</label>
					<label>
						Name:
						<input type='text' name='name' onChange={handleChange} />
					</label>
					<label>
						Amount:
						<input type='number' name='amount' onChange={handleChange} />
					</label>
					<label>
						Category:
						<select name='category' id='category' onChange={handleChange}>
							<option value='food'>food</option>
							<option value='hobby'>hobby</option>
							<option value='bills'>bills</option>
							<option value='sellery'>sellery</option>
						</select>
					</label>
					<button onClick={uppDateBudget}>Add</button>
				</form>
			</div>
			<div>
				<p className={'sum ' + (allSum < 0 ? 'red' : 'green')}>Sum:{allSum}</p>
			</div>
			<div className='box'>
				<div className='expenses'>
					<span>expenses</span>
					<ul>
						{expenses.map((el, index) => {
							return (
								<li className='element' key={index} id={el.id}>
									<span>{el.name}</span>
									<span>{el.amount}</span>
									<span>{el.category}</span>
									<span
										className='close'
										onClick={() => {
											deleteElement(el);
										}}
									>
										X
									</span>
								</li>
							);
						})}
						<p className='sum-expens'>Sum:{expensesSum}</p>
					</ul>
				</div>
				<div className='revenue'>
					<span>revenue</span>
					<ul>
						{revenue.map((el, index) => {
							return (
								<li className='element' key={index}>
									<span>{el.name}</span>
									<span>{el.amount}</span>
									<span>{el.category}</span>
									<span
										className='close'
										onClick={() => {
											deleteElement(el);
										}}
									>
										X
									</span>
								</li>
							);
						})}

						<p className='sum-revenue'>Sum:{revenueSum}</p>
					</ul>
				</div>
			</div>
			<input type="file" placeholder='wybier'/>
		</div>
	);
}
export default Task4;
