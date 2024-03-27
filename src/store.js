import { reactive } from "vue";

export const store = reactive({
    
    trendUrlMovies: 'https://api.themoviedb.org/3/trending/movie/day?api_key=dfa13031b80dd317ebfeae295f5282f6',
    trendUrlSeries: 'https://api.themoviedb.org/3/trending/tv/day?api_key=dfa13031b80dd317ebfeae295f5282f6',
    
    baseUrlMovies: 'https://api.themoviedb.org/3/search/movie?api_key=dfa13031b80dd317ebfeae295f5282f6&query=',
    baseUrlSeries: 'https://api.themoviedb.org/3/search/tv?api_key=dfa13031b80dd317ebfeae295f5282f6&query=',
    
    baseUrlFlags: 'https://flagsapi.com/IT/flat/64.png',
    baseUrlImg:'https://image.tmdb.org/t/p/w780/',

    baseUrlCastMovie: 'https://api.themoviedb.org/3/movie/268/credits?api_key=dfa13031b80dd317ebfeae295f5282f6',
    baseUrlGenreMovie: 'https://api.themoviedb.org/3/genre/movie/list?api_key=dfa13031b80dd317ebfeae295f5282f6',
    
    searchName: '',
    movies : [],
    series : [],
});