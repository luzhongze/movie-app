export default `
    type Country {
        iso_3166_1: String,
        name: String
    }
    type Movie implements Item {
        name: String,
        media_type: String,
        adult: Boolean,
        backdrop_path: String,
        budget: Int,
        genres: [Genre],
        genre_ids: [Int],
        homepage: String,
        id: Int,
        imdb_id: String,
        original_language: String,
        original_title: String,
        overview: String,
        popularity: Float,
        poster_path: String,
        production_companies: [Genre],
        production_countries: [Country],
        release_date: String,
        revenue: Int,
        runtime: Int,
        spoken_languages: [Country],
        status: String
        tagline: String,
        title: String,
        video: Boolean,
        vote_average: Float,
        vote_count: Int
      }
`;