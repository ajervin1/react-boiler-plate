// In control of logging users in and out
import { NavLink, Link } from 'react-router-dom'
import './NavBar.css'
import { useDispatch, useSelector } from "react-redux";
import { auth, firebase } from "../firestore";
import { setUser } from "../store";
import { useMemo } from "react";
export default function NavBar() {
	const dispatch = useDispatch();
	const state = useSelector(state => state);

	async function login(  ) {
		const provider = new firebase.auth.GoogleAuthProvider()
		const result = await auth.signInWithPopup(provider);
		const user = result.user._delegate;
		dispatch(setUser(user));
	}
	async function logout(  ) {
		await auth.signOut()
		dispatch(setUser(null));
	}
	const authButton = useMemo(() => {
		if ( state.app.user ){
			return <button onClick={logout} className={'btn btn-success'}>Sign Out</button>
		} else {
			return <button onClick={login} className={'btn btn-primary me-2'}>Sign In</button>
		}
	}, [state.app.user])
	return <header className="navbar">
		<div className="container d-flex align-items-center">
			<Link to="/" className={"d-flex text-decoration-none "}>
				<i className="fa fa-yelp fa-2x text-white me-2"></i> <h2 className={'text-white'}>Home</h2>
			</Link>
			<div className="middle-nav">
				<NavLink to={'/'} className={'fs-4 me-3 link'}>Home</NavLink>
				<NavLink to={'/favorites'} className={"fs-4 link"}>Favorites</NavLink>
			</div>
			<div className="actions">
				{authButton}
			</div>
		</div>

	</header>
}