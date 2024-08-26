import '../Section-Our-best/SectionOurBest.css';
import { Link } from 'react-router-dom';

import AROMISTICOCoffee from '../../../img/AROMISTICOCoffee.png';
import PrestoCoffee from '../../../img/PrestoCoffeeBeans.png';
import SolimoCoffee from '../../../img/SolimoCoffeeBeans.png';

export default function SectionOurBest() {
	return (
		<section className='best-coffee'>
			<h2>Our best</h2>
			<div className='d-flex group-coffee '>
				<div>
					<Link to='/our-coffee'>
						<img src={SolimoCoffee} alt='Solimo Coffee' />
						<p>
							Solimo Coffee Beans 2 kg <br />
							<span>10.73$</span>
						</p>
					</Link>
				</div>
				<div>
					<Link to='/our-coffee'>
						<img src={PrestoCoffee} alt='Presto Coffe' />
						<p>
							Presto Coffee Beans 1 kg <br />
							<span>5.99$</span>
						</p>
					</Link>
				</div>
				<div>
					<Link to='/our-coffee'>
						<img src={AROMISTICOCoffee} alt='AROMISTICOCoffee' />
						<p>
							AROMISTICO Coffee 1 kg <br />
							<span>6.99$</span>
						</p>
					</Link>
				</div>
			</div>
		</section>
	);
}
