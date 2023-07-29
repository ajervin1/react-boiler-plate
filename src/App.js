import { Route, Router, Routes } from 'react-router-dom'

import './App.css';
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
function App() {
	return (<div className="App">
			<Routes>
				<Route path={'/'} element={ <HomePage  />} />
				<Route path={'/details'} element={<DetailsPage />} />
			</Routes>
	</div>
	);
}

export default App;
