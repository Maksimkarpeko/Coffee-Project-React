import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Zerno1 from '../../img/Vector.png';
import Beans from "../../img/Beans logo(Dark).png"

import '../footer/footer.css';

export default function Footer() {
	return (
		<footer>
			<Container className='footer-container'>
				<Row>
					<div className='d-flex footer'>
						<div>
							<img src={Zerno1} alt='Зерна' />
						</div>
						<div className='footer-coffee-house'>
							<Link to='/'>Coffee house</Link>
						</div>
						<div className='footer-our-coffee'>
						<Link to='/our-coffee'>Our coffee</Link>
						</div>
						<div className='footer-for'>
						<Link to='/For-your-pleasure'>For your pleasure</Link>
						</div>
					</div>
				</Row>
			</Container>
			<div className='footer-img'>
				<img src={Beans} alt="" />
			</div>
		</footer>
	);
}
