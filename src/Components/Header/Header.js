import React from 'react';
import NavLink from './NavLink';
import Menu from './Menu';

function Header() {
	return (
		<div>
			<Menu />
			<NavLink to={'/'} label={'Link 1'} />
			<NavLink to={'/'} label={'Link 2'} />
			<NavLink to={'/'} label={'Link 3'} />
			<NavLink to={'/'} label={'Link 4'} />
			<Menu />
		</div>
	);
}
export default Header;
