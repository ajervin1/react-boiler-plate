import { Route, Router, Routes } from 'react-router-dom'

import './App.css';
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { db } from "./firestore";
function App() {
	console.log(db)
	return (<div className="App">
			<i className="fa fa-home me-2"></i>
			<Routes>
				<Route path={'/'} element={ <HomePage  />} />
				<Route path={'/details'} element={<DetailsPage />} />
			</Routes>
	</div>
	);
}

export default App;
