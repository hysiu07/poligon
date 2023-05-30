import React from 'react';
import { Routes, Route } from 'react-router-dom';

function Navmenu() {
	return (
		<div>
			<Routes>
				<Route path='/' element={'Element1'} />
				<Route path='/dialog' element={'Element2'} />
				<Route path='/snackbar' element={'Element3'} />
			</Routes>
		</div>
	);
}

export default Navmenu;
