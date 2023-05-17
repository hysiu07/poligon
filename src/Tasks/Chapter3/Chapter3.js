import React, { useState } from 'react';

import { Btn, Input, TextArea } from './Form';

import Card from './Card';

import Menu from './Menu';
import { MenuLink } from './Menu';

import Employees from './Employees';

const data = [
	{
		name: 'John',
		lastName: 'Smith',
		age: 30,
		sallary: 2000,
		post: 'accountant',
	},
	{
		name: 'Margareth',
		lastName: 'Obama',
		age: 40,
		sallary: 3000,
		post: 'waitress',
	},
	{
		name: 'Daniel',
		lastName: 'Brown',
		age: 20,
		sallary: 1500,
		post: 'cleaner',
	},
	{ name: 'Paul', lastName: 'Murphy', age: 20, sallary: 5000, post: 'CEO' },
];

function Chapter3() {
	const [showInfo, setShowInfo] = useState(false);

	const showMore = () => {
		setShowInfo(!showInfo);
		console.log(showInfo);
	};

	return (
		<div>
			<Btn label='Click me!' bgColor='#0984e3' color='#fd79a8' icon='user' />
			<Input
				bgColor='lime'
				color='red'
				borderSize=''
				borderRadius=''
				borderColor=''
			/>
			<TextArea
				bgColor='lime'
				color='red'
				borderSize=''
				borderRadius=''
				borderColor=''
			/>
			<Card
				title='Shrim and Chorizo Paella'
				intro='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
				showMore={showMore}
				showInfo={showInfo}
				content='Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes....'
			/>
			<Menu>
				<MenuLink to='/' name='Home'>
					Home
				</MenuLink>
				<MenuLink to='/about' name='About'>
					About
				</MenuLink>
				<MenuLink to='/contact' name='Contact' isActive>
					Contact
				</MenuLink>
				<MenuLink to='/posts' name='Posts'>
					Posts
				</MenuLink>
			</Menu>
			<Employees employees={data} />
		</div>
	);
}
export default Chapter3;
