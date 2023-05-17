import React from 'react';

import News from '../Components/News';

const data = [
	{ id: 1, author: 'Jan Brzęczek', header: 'nagłówek 1', intro: 'Intro 1' },
	{ id: 2, author: 'Jan Brzęczek', header: 'nagłówek 2', intro: 'Intro 2' },
	{ id: 3, author: 'Jan Brzęczek', header: 'nagłówek 3', intro: 'Intro 3' },
];

function Articles() {
	return (
		<div>
			{data.map((el, index) => {
				return (
					<News
						key={index}
						header={el.header}
						intro={el.intro}
						author={el.author}
					/>
				);
			})}
		</div>
	);
}

export default Articles;
