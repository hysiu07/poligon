import React from 'react';
import { useParams } from 'react-router-dom';

function Footer() {
	const { id } = useParams();
	console.log(id, 'params');

	return <footer>&copy; 2023 School React</footer>;
}

export default Footer;
