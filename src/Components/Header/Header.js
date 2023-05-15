import React from 'react';
import NavLink from './NavLink';

function Header() {
	return (
		<div>
            {/* <Logo /> */}
            <div>Logo</div>
			<div>
				{/* <NavLink to={'/'} label={'Link 1'} />
                <NavLink to={'/'} label={'Link 2'} />
                <NavLink to={'/'} label={'Link 3'} /> */}
				<a href='/'>Link1</a>
				<a href='/'>Link2</a>
				<a href='/'>Link3</a>
			</div>
		</div>
	);
}
export default Header;
