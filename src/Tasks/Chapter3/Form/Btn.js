import React from 'react';

import Input from './Input';
import TextArea from './TextArea';

import { faUser } from '@fortawesome/free-solid-svg-icons';

function Btn({ label, bgColor, color }) {
	return (
		<div>
			<button
				icon={faUser}
				style={{
					backgroundColor: bgColor,
					color: color,
					padding: 10,
					fontSize: 50,
				}}
			>
				{label}
			</button>
		</div>
	);
}
export default Btn;
