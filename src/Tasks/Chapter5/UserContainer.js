import React, { useEffect, useState } from 'react';
import './UserContainer.css';

function UserSearch({ usersList, setUsersList, setReset, reset }) {
	const [searchUser, setSearchUser] = useState('');

	return (
		<div>
			<input
				type='text'
				placeholder='user'
				value={searchUser}
				onChange={(e) => {
					setSearchUser(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					setUsersList(
						usersList.filter((el) => {
							if (el.userName.includes(searchUser)) {
								return el;
							}
						})
					);
				}}
			>
				enter
			</button>
			<button
				onClick={() => {
					setReset(!reset);
				}}
			>
				reset
			</button>
		</div>
	);
}

function UserContainer() {
	const [usersList, setUsersList] = useState([]);
	const [reset, setReset] = useState(false);

	useEffect(() => {
		fetch('users.json')
			.then((res) => res.json())
			.then((data) => {
				setUsersList(data);
			});
	}, [reset]);

	return (
		<div className='user-container'>
			<UserSearch
				setUsersList={setUsersList}
				usersList={usersList}
				setReset={setReset}
				reset={reset}
			/>
			{usersList.map((user) => {
				return (
					<ul key={user.userId}>
						<li>{user.userName}</li>
					</ul>
				);
			})}
		</div>
	);
}
export default UserContainer;
