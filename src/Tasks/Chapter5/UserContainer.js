import React, { useEffect, useState } from 'react';
import './UserContainer.css';

function UserSearch({ usersList, setUsersList }) {
	const [searchUser, setSearchUser] = useState('');
	console.log(searchUser);

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
					usersList.filter((el) => {
						console.log(el.userName);
						if (searchUser === el.userName) {
							console.log('tak');
                            console.log(usersList);
                            console.log(el);
                            setUsersList(el)
						} else {
							console.log('nie');
						}
					});
				}}
			>
				enter
			</button>
			<button
				onClick={() => {
					setUsersList((prevUserList) => {
						return prevUserList;
					});
				}}
			>
				reset
			</button>
		</div>
	);
}

function UserContainer() {
    
	const [usersList, setUsersList] = useState([]);

	useEffect(() => {
		fetch('users.json')
			.then((res) => res.json())
			.then((data) => {
				setUsersList(data);
			});
	}, []);

	return (
		<div className='user-container'>
			<UserSearch setUsersList={setUsersList} usersList={usersList} />
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
