import React from 'react';
function Input({ bgColor, color, borderSize, borderRadius, borderColor }) {
	return (
		<div>
			<input
				type='text'
				placeholder='input'
				style={{
					backgroundColor: bgColor,
					color: color,
					padding: 10,
				}}
			/>
		</div>
	);
}

export default Input;
