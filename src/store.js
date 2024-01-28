import { reactive } from "vue";

export const store = reactive({
    baseUrlCreate:'https://api.themoviedb.org/3/trending/all/day?api_key=0c109132d12a812dd280ce879c2b7239',
    baseUrlSearchMovie:'https://api.themoviedb.org/3/search/movie?api_key=0c109132d12a812dd280ce879c2b7239',
    baseUrlSearchTvSearies:'https://api.themoviedb.org/3/search/tv?api_key=0c109132d12a812dd280ce879c2b7239',
    searchInput: '',
    filmsList: [],
    trendList: [],
    TvList: [],
    MenuList:[],
    genreActive: [],
    flag: false,
});