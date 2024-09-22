import '../About-our-beans/About-our-beans.css';

import Beans from '../../../img/Beans logo(Dark).png';
import Girl from '../../../img/Girl.png';

export default function SectionAboutOurBeans() {
	return (
		<>
			<section className='our-beans'>
				<div className='our-beans-img'>
					<img src={Girl} alt='Girl' />
				</div>
				<div className='our-beans-text'>
					<h2>About our beans</h2>
					<img src={Beans} alt='Beans' />
					<p>
						Extremity sweetness difficult behaviour he of. On <br />disposal of as
						landlord horrible. <br />
						<br />
						Afraid at highly months do things on at. Situation <br /> recommend
						objection do intention <br />
						 so questions. <br /> As greatly removed calling
						pleased improve an. <br /> Last ask him cold feel <br /> met spot shy want.
						Children me laughing we <br /> prospect answered followed. At it went <br /> is
						song that held help face.
					</p>
				</div>
			</section>
			<hr />
		</>
	);
}
