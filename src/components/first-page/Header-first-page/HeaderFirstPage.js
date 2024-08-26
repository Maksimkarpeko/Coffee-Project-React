import zernoLine from '../../../img/Beans logo(White).png';
import Menu from '../../Menu/Menu';

import './HeaderFirstPage.css';

export default function HeaderFirstPage() {
	return (
		<header className='menu'>
			<Menu />
			<div className='center-text'>
				<h1>Everything You Love About Coffee</h1>
				<br />
				<img src={zernoLine} alt='ZernoLine' />
				<br />
				<h2 className='center-text-energy'>
					We makes every day full of energy and taste
				</h2>{' '}
				<br />
				<h2>Want to try our beans?</h2> <br />
				<button className='Btn-Text'>More</button>
			</div>
		</header>
	);
}
