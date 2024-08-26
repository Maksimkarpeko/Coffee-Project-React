import './Card.css';
import { Link } from 'react-router-dom';

import AromisticoCoffee from '../../../img/AROMISTICOCoffee.png';

export default function Card({ Name, From, Price }) {
	return (
		<>
			<div className='Card'>
				<Link to='/our-coffee-About-it'>
					<img src={AromisticoCoffee} alt='' /> <br />
					<span className='Card-Name'>{Name}</span> <br />
					<span className='Card-From'>{From}</span> <br />
					<span className='Card-Price'>{`${Price}$`}</span>
				</Link>
			</div>
		</>
	);
}
