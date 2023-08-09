import { useMemo } from "react";
import './Post.css'

const post = {
	adult: false,
	backdrop_path: '/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg',
	genre_ids: [ 16, 28, 12, 878 ],
	id: 569094,
	original_language: 'en',
	original_title: 'Spider-Man: Across the Spider-Verse',
	overview: 'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.',
	popularity: 1833.696,
	poster_path: '/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
	release_date: '2023-05-31',
	title: 'Spider-Man: Across the Spider-Verse',
	video: false,
	vote_average: 8.5,
	vote_count: 2812
}
export default function Post( { post, addFavorite, favorites, removeFavorite } ) {

	const isSaved = useMemo(() => {
		if ( favorites ) {
			const favIds = favorites.map(fav => fav.id);
			return favIds.includes(post.id);
		}
	}, [ favorites ]);
	let heartButton;
	if ( isSaved ) {
		heartButton = <i onClick={ () => {removeFavorite(post)}} className="heart-button text-danger fa fa-heart fs-3"/>
	} else {
		heartButton = <i onClick={ () => {addFavorite(post)}} className="heart-button text-white fa fa-heart fs-3"/>
	}


	const imagePath = `https://image.tmdb.org/t/p/w220_and_h330_face/${ post.poster_path }`
	return <div key={post.id} className="post card shadow rounded overflow-hidden">
		<div className="img-container">
			<img src={ imagePath } alt="" className={ '' }/>
		</div>
		<div className="card-body pb-1 position-relative">
			<h2 className="h6 fw-bold">{ post.title }</h2>
			<p className={ 'text-muted opacity-75' }>Jun 06, 2023</p>
			{ heartButton }
		</div>
	</div>

}

// <h5 className="card-title small">{ post.title }</h5>
// <h4>{JSON.stringify(isSaved)}</h4>
// <p className={ "lead" }>Release Date{ post.release_date }</p>
// <p className={ "lead" }>Vote Average{ post.vote_count }</p>
// <button className={'btn btn-primary'} onClick={async () => {
// 	await addFavorite(post);
// }}>Add Favorite</button>
// <button className={'btn btn-success'} onClick={async () => {
// 	await removeFavorite(post)
// }}>Remove Favorite</button>