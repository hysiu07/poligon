import React, { useContext } from 'react';
import { UserInfo } from './contextUser';
import withData from '../withData';
import useMobile from '../useMobile';
import { AiOutlineHome, AiOutlineTeam } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';

function DesktopNavItem({ icon, name }) {
	return (
		<div>
			<label htmlFor={name}>{icon}</label>
			<a href='#'>{name}</a>
		</div>
	);
}
function MobileNavItem({ icon, name }) {
	return (
		<div>
			<label htmlFor={name}>{icon}</label>
		</div>
	);
}

function Places(props) {
	const user = useContext(UserInfo);
	const { width } = useMobile();
	return (
		<div>
			<div className='chapter7-menu-nav'>
				<DesktopNavItem name={'Home'} icon={<AiOutlineHome size={'2em'} />} />
				<DesktopNavItem name={'About'} icon={<FcAbout size={'2em'} />} />
				<DesktopNavItem name={'Team'} icon={<AiOutlineTeam size={'2em'} />} />
			</div>
			<h3>Places funcion-component</h3>
			<p>{user.name}</p>
			<p>{user.age}</p>
			<p>{user.email}</p>
			<h4>HoC</h4>
			<p>{props.city}</p>
			<p>szerokość::{width}</p>
		</div>
	);
}
export default withData(Places);
