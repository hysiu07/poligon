import React from 'react';

import Chapter2 from './Chapter2';
import Chapter4 from './Chapter4';
import Chapter3 from './Chapter3';
import Chapter5 from './Chapter5/Chapter5';
import Chapter6 from './Chapter6';
import Chapter7 from './Chapter7/Chapter7';
import { PassContext } from './Chapter7/context';
import { UserInfo } from './Chapter7/components/contextUser';

function Tasks() {
	const pass = 'lubieplacki';
	const user = {
		name: 'Dzordż',
		age: 20,
		email: 'dzordzo@gmail.com',
	};
	return (
		<div>
			<PassContext.Provider value={pass}>
				<Chapter2 />
				<Chapter3 />
				<Chapter4 />
				<Chapter5 />
				<Chapter6 />

				<UserInfo.Provider value={user}>
					<Chapter7 />
				</UserInfo.Provider>
			</PassContext.Provider>
		</div>
	);
}
export default Tasks;
