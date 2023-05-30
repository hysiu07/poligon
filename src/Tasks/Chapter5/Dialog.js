import React, { useState, useRef } from 'react';
import './Dialog.css';

function Button({ handleClick }) {
	return (
		<button
			onClick={() => {
				handleClick();
			}}
		>
			Click!
		</button>
	);
}
function Window({ handleClick, setContent, setTitle }) {
	const titleRef = useRef();
	const contentRef = useRef();

	return (
		<div className='window-shadow'>
			<div className='window'>
				<label>
					enter your title
					<input type='text' ref={titleRef} />
				</label>
				<label>
					enter your content
					<input type='text' ref={contentRef} />
				</label>
				<button
					className='close'
					onClick={() => {
						handleClick();
					}}
				>
					X
				</button>
				<button
					className='confirm'
					onClick={() => {
						handleClick();
						setTitle(titleRef.current.value);
						setContent(contentRef.current.value);
					}}
				>
					OK
				</button>
				<button
					onClick={() => {
						console.log('click');
					}}
				>
					Confirm
				</button>
				<button
					onClick={() => {
						console.log('click');
					}}
				>
					Abort
				</button>
			</div>
		</div>
	);
}

function Dialog() {
	const [showDialog, setShowDialog] = useState(false);

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const handleClick = () => {
		setShowDialog(!showDialog);
	};

	return (
		<div className='dialog'>
			<p>title: {title} </p>
			<p>content: {content}</p>
			<Button handleClick={handleClick} />
			{showDialog && (
				<Window
					handleClick={handleClick}
					setTitle={setTitle}
					setContent={setContent}
				/>
			)}
		</div>
	);
}
export default Dialog;
