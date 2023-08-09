
import './App.css';

import { auth, db, firebase } from "./firestore";
import { useEffect, useMemo } from "react";
import { addPosts, addUser, getNowPlaying } from "./requests";
import { useDispatch, useSelector } from "react-redux";
import { setPosts, setUser, } from "./store";
import Post from "./components/Post";
import axios from "axios";
import NavBar from "./components/NavBar";

function FavoritePage() {
	const dispatch = useDispatch();
	const state = useSelector(state => state);
	// const favorites = state.app.user.favorites;
	async function addFavorite( favorite ) {
		const { data } = await axios.post(`http://localhost:8000/user/${ state.app.user._id }/favorites`, favorite);
		dispatch(setUser(data));
	}
	async function removeFavorite( favorite ) {
		const { data } = await axios.post(`http://localhost:8000/user/${ state.app.user._id }/favorites/remove`, favorite);

		dispatch(setUser(data));
	}

	return (<div className="favorite">
			<div className="container pt-5">
				<div className="row flex-wrap justify-content-between">
					{ state.app.user && state.app.user?.favorites.map(post => {
						return <Post key={post.id} favorites={ state.app.user?.favorites } post={ post } addFavorite={ addFavorite }
						             removeFavorite={ removeFavorite }/>
					}) }
				</div>
			</div>
		</div>
	);
}

export default FavoritePage;
