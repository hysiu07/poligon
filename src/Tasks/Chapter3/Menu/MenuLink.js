import React from 'react';

function MenuLink({ to, name, isActive }) {
    console.log(isActive);
    return (
			<a href={to} style={isActive && {color: 'red'}}>
				{name}
			</a>
		);
}

export default MenuLink;
