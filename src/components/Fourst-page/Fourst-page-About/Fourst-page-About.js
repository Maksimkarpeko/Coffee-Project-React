import Aboutourgoods from '../../../img/Aboutourgoods.png';
import Baens from '../../../img/Beans logo(Dark).png';
import './Fourst-page-About.css';
const FourstPageAbout = () => {
	return (
		<>
			<div className='Fourst-Page-About'>
				<div className='Fourst-Page-Img'>
					<img src={Aboutourgoods} alt='About' />
				</div>
				<div className='Fourst-Page-Text'>
					<h2>About our goods</h2>
					<img src={Baens} alt='Beans' />
					<p>
						Extremity sweetness difficult behaviour he of. On <br />
						disposal of as landlord horrible. <br />
						<br />
						Afraid at highly months do things on at. Situation <br />
						recommend objection do intention <br />
						so questions. <br /> As greatly removed calling pleased improve an.
						<br />
						Last ask him cold feel <br /> met spot shy want. Children me
						laughing we <br /> prospect answered followed. At it went <br /> is song that held
						help face.
					</p>
				</div>
			</div>
		</>
	);
};
export default FourstPageAbout;
