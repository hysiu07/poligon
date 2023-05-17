import React, { useState } from 'react';

import Author from '../Author';
import Scoring from '../Scoring';

const styles = {
	backgroundColor: 'gray',
	border: 'lime 1px solid',
	padding: 10,
	color: {
		color: 'red',
	},
};

function News({ header, intro, author }) {
	const [score] = useState(5);
	return (
		<div style={styles}>
			<h2>{header}</h2>
			<p style={styles.color}>{intro}</p>
			<Author author={author} />
			<Scoring score={score} />
		</div>
	);
}
export default News;
