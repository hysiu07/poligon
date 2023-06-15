import { useState, useEffect } from 'react';

function useMobile() {
	const [{ width, mobileSize }, setSize] = useState({
		width: window.innerWidth,
		mobileSize: null,
	});
	useEffect(() => {
		const resize = () => {
			setSize({
				width: window.innerWidth,
				mobileSize: window.innerWidth < 1024 ? true : false,
			});
		};

		window.addEventListener('resize', resize);

		return () => {
			window.removeEventListener('resize', resize);
		};
	}, [setSize]);

	return { width, mobileSize };
}
export default useMobile;
