import './Search.css';

const Search = ( {value, onChange}) => {
	return (
		<>
			<span>Lookiing for</span>
			<input
				type='text'
				name='text'
				placeholder='start typing here...'
				className='input-search'
				value={value}
				onChange={e => onChange(e.target.value)}
			/>
		</>
	);
};

export default Search;
