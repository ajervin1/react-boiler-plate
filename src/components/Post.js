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
export default function Post({post, addFavorite}) {
	const imagePath = `https://image.tmdb.org/t/p/w300/${ post.poster_path }`
	return <article className="col-4 mb-5">
		<div className="card mx-auto" style={ { width: "250px", aspectRatio: "1/1" } }>
			<img src={imagePath} alt="" className={ 'card-img-top' }/>
			<div className="card-body ">
				<h5 className="card-title ">{ post.title }</h5>
				<p className={ "lead" }>Release Date{ post.release_date }</p>
				<p className={ "lead" }>Vote Average{ post.vote_count }</p>
				<button onClick={async () => {
					await addFavorite(post);
				}}>Add Favorite</button>
			</div>
		</div>
	</article>
}