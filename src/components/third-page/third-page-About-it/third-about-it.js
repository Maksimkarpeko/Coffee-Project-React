import AromaPicha from '../../../img/Aromistico.jpeg';
import BeancLogo from '../../../img/Beans logo(Dark).png';
import './third-about-it.css';
const ThirdAboutIt = () => {
	return (
		<>
			<section className='About-it-3'>
				<div className='About-it-img'>
					<img src={AromaPicha} alt='Aroma' />
				</div>
				<div className='About-it-text'>
					<h2>About it</h2>
					<img src={BeancLogo} alt='Beans' />
					<p>
						<b>Country:</b>Brasil
					</p>
					<p>
						<b>Description:</b> Lorem ipsum dolor sit amet, consectetur <br />
						adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />
						et dolore magna aliqua. Ut enim ad minim veniam, quis <br /> nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea <br />
						commodo consequat.
					</p>
					<p>
						<b>
							Price: <span>16.99$</span>
						</b>
					</p>
				</div>
			</section>
		</>
	);
};
export default ThirdAboutIt;
