import { Route, Router, Routes } from 'react-router-dom'

import './App.css';
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { auth, db, firebase } from "./firestore";
import { useEffect, useMemo } from "react";
import { addPosts, addUser, getNowPlaying } from "./requests";
import { useDispatch, useSelector } from "react-redux";
import { setPosts, setUser, } from "./store";
import Post from "./components/Post";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
import NavBar from "./components/NavBar";

function App() {
	const dispatch = useDispatch();
	const state = useSelector(state => state);

	async function login() {
		const provider = new firebase.auth.GoogleAuthProvider()
		const result = await auth.signInWithPopup(provider);
		const user = result.user._delegate;
		dispatch(setUser(user));
	}

	async function logout() {
		await auth.signOut()
	}

	async function addFavorite( favorite ) {
		const { data } = await axios.post(`http://localhost:8000/user/${ state.app.user._id }/favorites`, favorite);
		dispatch(setUser(data));
	}

	async function removeFavorite( favorite ) {
		const { data } = await axios.post(`http://localhost:8000/user/${ state.app.user._id }/favorites/remove`, favorite);
		console.log(data)
		debugger
		dispatch(setUser(data));
	}

	useMemo(() => {

		(async () => {
			const data = await getNowPlaying();
			dispatch(setPosts(data.results))
			// await addPosts(data.results);
		})();

	}, [])
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

	return (<div className="App">
			<NavBar/>
			<header>
				<div className="container py-3 bg-secondary shadow-lg">
					<h2>Header</h2>
					<button className={ 'btn btn-success me-3' } onClick={ login }>Login</button>
					<button className={ 'btn btn-primary' } onClick={ logout }>Logout</button>
				</div>
			</header>

			<div className="container">
				<div className="row">
					{ state.app.posts && state.app.user ? state.app.posts.map(post => {
							return <Post favorites={ state.app.user?.favorites } post={ post } addFavorite={ addFavorite }
							             removeFavorite={ removeFavorite }/>
						})
						: <div>Loading</div>
					}
				</div>
			</div>
		</div>
	);
}

export default App;
