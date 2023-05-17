import React from 'react';

function TextArea({ bgColor, color, borderSize, borderRadius, borderColor }) {
	return (
		<div>
			<input
				type='text'
				placeholder='textArea'
				style={{
					backgroundColor: bgColor,
					color: color,
					padding: 10,
				}}
			/>
		</div>
	);
}

export default TextArea;
