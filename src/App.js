import { Route, Router, Routes, BrowserRouter } from 'react-router-dom'

import './App.css';

import { auth, db, firebase } from "./firestore";
import { useEffect, useMemo } from "react";
import { addPosts, addUser, getNowPlaying } from "./requests";
import { useDispatch, useSelector } from "react-redux";
import { setPosts, setUser, } from "./store";
import Post from "./components/Post";
import axios from "axios";
import NavBar from "./components/NavBar";
import HomePage from "./HomePage";
import FavoritesPage from "./FavoritesPage";

function App() {
	const dispatch = useDispatch();
	const state = useSelector(state => state);


	useEffect(() => {
		auth.onAuthStateChanged(async user => {
			if ( user ) {
				const userData = user._delegate;

				const payload = {
					id: userData.uid,
					email: userData.email,
				}
				const { data } = await axios.post('http://localhost:8000/user', payload);
				dispatch(setUser(data));

			} else {
				dispatch(setUser(null));
			}
		})
	}, [])
	return (<BrowserRouter>
			<NavBar/>
			<div className="container">
				<Routes>
					<Route path={'/'} element={<HomePage/>} />
					<Route path={'/favorites'} element={<FavoritesPage />} />
				</Routes>
			</div>
	</BrowserRouter>

	);
}

export default App;
