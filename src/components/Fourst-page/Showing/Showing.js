import Card from '../../second-page/card/Card';

const Showing = ()=>{
	const CardArr = [
		{
			Name: 'AROMISTICO Coffee 1 kg',
			From: 'Brazil',
			Price: '6.99',
		},
		{
			Name: 'AROMISTICO Coffee 1 kg',
			From: 'Kenya',
			Price: '6.99',
		},
		{
			Name: 'AROMISTICO Coffee 1 kg',
			From: 'Columbia',
			Price: '6.99',
		},
	];
	const CardArrNew = [
		{
			Name: 'AROMISTICO Coffee 1 kg',
			From: 'Brazil',
			Price: '6.99',
		},
		{
			Name: 'AROMISTICO Coffee 1 kg',
			From: 'Brazil',
			Price: '6.99',
		},
		{
			Name: 'AROMISTICO Coffee 1 kg',
			From: 'Brazil',
			Price: '6.99',
		},
	];
	return(
		<>
		<div style={{ display: 'flex' }} className='Card-New'>
					<div style={{ display: 'flex' }}>
						{CardArr.map((item, index) => (
							<div className={index === 0 ? 'First-card' : ''}>
								<Card
									key={index}
									Name={item.Name}
									From={item.From}
									Price={item.Price}
								/>
							</div>
						))}
					</div>
				</div>
				<div style={{ display: 'flex' }}>
					{CardArrNew.map((item, index) => (
						<div className={index === 0 ? 'First-card' : ''}>
							<Card
								key={index}
								Name={item.Name}
								From={item.From}
								Price={item.Price}
							/>
						</div>
					))}
				</div>
		</>
	)
}
export default Showing