import React from 'react';
const styles = {
	marginRight: 15,
};
function NavLink({ to, label }) {
	return (
		<a href={to} style={styles}>
			{label}
		</a>
	);
}
export default NavLink;
