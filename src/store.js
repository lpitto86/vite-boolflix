import { reactive } from 'vue';

export const store = reactive({

    searchText: '',
    apiKey: '0c109132d12a812dd280ce879c2b7239',
    moviesList: [],
    tvSeriesList: [],
    moviesApiUri: 'https://api.themoviedb.org/3/search/movie',
    seriesApiUri: 'https://api.themoviedb.org/3/search/tv',
    imageUrl: 'https://image.tmdb.org/t/p/w342'

});