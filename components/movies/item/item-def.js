export default `
    interface Item {
        vote_average: Float,
        vote_count: Int,
        id: Int,
        video: Boolean,
        media_type: String,
        title: String,
        name: String,
        popularity: Float,
        poster_path: String,
        original_language: String,
        original_title: String,
        genre_ids: [Int],
        backdrop_path: String,
        adult: Boolean,
        overview: String,
        release_date: String
      }
`;