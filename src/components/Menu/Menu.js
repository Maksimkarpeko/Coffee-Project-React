import { Container, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Zerno from '../../img/coffee-beans (1).png';


export default function Menu() {
	return (
		<>
			<Container className='menu-container'>
				<Row>
					<div className='d-flex'>
						<div>
							<img src={Zerno} alt='Зерна' />
						</div>
						<div className='menu-coffee-house'>
							<Link to='/'>Coffee house</Link>
						</div>
						<div className='menu-our-coffee'>
							<Link to='/our-coffee'>Our coffee</Link>
						</div>
						<div className='menu-for'>
							<Link to='/For-your-pleasure'>For your pleasure</Link>
						</div>
					</div>
				</Row>
			</Container>
		</>
	);
}
