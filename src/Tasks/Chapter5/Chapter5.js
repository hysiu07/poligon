import React, { useState } from 'react';
import Dialog from './Dialog';
import Snackbar from './Snackbar';
import Navmenu from './Navmenu';
import { NavLink } from 'react-router-dom';


function Chapter5() {
	let delay = 5000;
	let leftTop = { left: 0, top: 0 };
	let rightTop = { right: 0, top: 0 };
	return (
		<div>
			<h2>Chapter 5</h2>
			<Navmenu />
			<Dialog />
			<Snackbar delay={delay} position={rightTop} />
			<ul>
				<li>
					<NavLink to={'/'}>Chapter5</NavLink>
				</li>
				<li>
					<NavLink to={'/dialog'}>Dialog</NavLink>
				</li>
				<li>
					<NavLink to={'/snackbar'}>Snackbar</NavLink>
				</li>
			</ul>
		</div>
	);
}
export default Chapter5;
