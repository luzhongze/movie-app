export default `
    type Author {
        id: Int,
        name: String,
        gender: Int,
        profilePath: String
      }
      type Season {
        airDate: String,
        episodeCount: Int,
        id: Int,
        posterPath: String,
        seasonNumber: Int
      }
    type TV implements Item {
        name: String,
        release_date: String,
        adult: Boolean,
        genre_ids: [Int],
        original_title: String,
        title: String,
        media_type: String,
        video: Boolean,
        backdrop_path: String,
        created_by: [Author],
        episode_run_time: [Int],
        first_air_date: [Genre],
        homepage: String,
        id: Int,
        in_production: Boolean,
        languages: [String]
        last_air_date: String,
        name: String,
        networks: [Genre],
        number_of_episodes: Int,
        number_of_seasons: Int,
        origin_country: [String],
        original_language: String,
        original_name: String,
        overview: String,
        popularity: Float,
        poster_path: String,
        production_companies: [Genre],
        seasons: [Season],
        status: String,
        type: String,
        vote_average: Float,
        vote_count: Int
      }
`;