import React, { useState } from 'react';
import './Snackbar.css';

function Snackbar({ delay, position }) {
	const [showSnackBar, setShowSnackBar] = useState(false);

	const [contentColor, setContentColor] = useState(false);

	const functionSnackBar = () => {
		setShowSnackBar(true);
		setTimeout(() => {
			setShowSnackBar(false);
		}, delay);
		setContentColor(!contentColor);
		console.log(contentColor);
	};

	return (
		<div className='container'>
			<button
				onClick={() => {
					functionSnackBar();
				}}
			>
				Snackbar
			</button>
			{showSnackBar && (
				<div
					className={'snackbar ' + (contentColor && 'red-snackbar')}
					style={position}
				>
					My SnackBar
				</div>
			)}
		</div>
	);
}
export default Snackbar;
