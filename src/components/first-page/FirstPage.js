import HeaderFirstPage from './Header-first-page/HeaderFirstPage';
import SectionAboutUs from './Section-About-us/SecrionAbout-us';
import SectionOurBest from './Section-Our-best/Section-Our-best';
import Footer from '../footer/Footer';
export default function FirstPage() {
	return (
		<>
			<HeaderFirstPage />
			<SectionAboutUs />
			<SectionOurBest />
			<Footer/>
		</>
	);
}
