import React from 'react';
import './Filter.css';

const Filter = ({ fromValue, onHandClick }) => {
	const handleClick = item => {
		onHandClick(item); // Передача названия кнопки функции обработчика
	};

	const NameButton = ['Brazil', 'Kenya', 'Columbia'];

	return (
		<div>
			<span>Or filter</span>
			{NameButton.map((item, index) => (
				<button
					key={index}
					className='Button-filter'
					onClick={() => handleClick(item)}
					fromValue={fromValue}
				>
					<div>{item}</div>
				</button>
			))}
		</div>
	);
};

export default Filter;
