import { useState, useEffect } from 'react';

function useMobile() {
	// const checkSize = () => {
	// 	if (width > 1024) {
	// 		setSize({
	// 			...width,
	// 			mobileSize: false,
	// 		});
	// 	} else {
	// 		setSize({
	// 			...width,
	// 			mobileSize: true,
	// 		});
	// 	}
	// };
	const [{ width, mobileSize }, setSize] = useState({
		width: window.innerWidth,
		mobileSize: null,
	});
	useEffect(() => {
		const resize = () => {
			setSize({
				width: window.innerWidth,
				mobileSize: (width > 1024 ? true : false),
			});
		};

		window.addEventListener('resize', resize);
		return () => {
			window.removeEventListener('resize', resize);
		};
	}, [setSize]);
	console.log(mobileSize);
	return { width };
}
export default useMobile;
