import FourstHeader from './FourstHeader/FourstHeader';
import Footer from '../footer/Footer';
import FourstPageAbout from './Fourst-page-About/Fourst-page-About';
import Showing from './Showing/Showing';
const FourstPage = () => {
	return (
		<>
			<FourstHeader />
			<FourstPageAbout/>
			<hr />
			<Showing/>
			<Footer/>
		</>
	);
};
export default FourstPage;
