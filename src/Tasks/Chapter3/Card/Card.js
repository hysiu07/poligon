import React from 'react';
import './Card.css';

function Card({ title, intro, content, showMore, showInfo }) {
	return (
		<div className='card'>
			<div className='img'></div>
			<h3 className='title'>{title}</h3>
			<p className='intro'>{intro}</p>
			<button
				onClick={() => {
					showMore();
				}}
			>
				{showInfo ? 'hidden info' : ' show more info!'}
			</button>
			{showInfo && <div>{content}</div>}
		</div>
	);
}

export default Card;
