import axios from 'axios'
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDNiMDkzOTNiY2IxZTRlZDkxOTU1OWQ2ZDg2MjA3YiIsInN1YiI6IjY0ZDJlNGZlZGQ5MjZhMDFlNjI2YmM4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k4rGnO9tQgIdAFzX-ZRXsMSrwD-rFdH1Ilr3QzyThFc"
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = `Bearer ${ AUTH_TOKEN }`;
const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
})
api.defaults.headers.common['Authorization'] = `Bearer ${ AUTH_TOKEN }`;

export async function getTopRated(  ) {
	const {data} = await axios.get('/movie/top_rated');
	return data;
}
export async function getPopularMovies(  ) {
	const {data} = await axios.get('/movie/popular');
	return data;
}
export async function getNowPlaying(  ) {
	const {data} = await axios.get('/movie/now_playing');
	return data;
}

export async function addPosts( posts ) {
	const results = await axios.post('http://localhost:8000/post', posts);
	console.log(results);
	return results
}
const exampleUser = {
	id: 'userid',
	email: "",

}
export async function addUser( user ) {
	const result = await axios.post('http://localhost:8000/user', user);

	return result
}