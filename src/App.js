import { Route, Routes } from 'react-router-dom';
import FirstPage from './components/first-page/FirstPage';
import SecondPage from './components/second-page/second-page';
import ThirdPage from './components/third-page/third-page';
import FourstPage from './components/Fourst-page/Fourst-page';
import "./media/Staly.css"
function App() {
	return (
		<>
			<Routes>
					<Route path='/' element={<FirstPage />} />
					<Route path='our-coffee' element={<SecondPage />} />
					<Route path='our-coffee-About-it' element={<ThirdPage/>} />
					<Route path='For-your-pleasure' element={<FourstPage/>} />
			</Routes>
		</>
	);
}

export default App;
