import { reactive } from "vue";

export const store = reactive({
    baseUrlCreate:'https://api.themoviedb.org/3/trending/all/day?api_key=b1f3b68aff2290b9c0157abb080d6c9f',
    baseUrlSearchMovie:'https://api.themoviedb.org/3/search/movie?api_key=b1f3b68aff2290b9c0157abb080d6c9f',
    baseUrlSearchTvSearies:'https://api.themoviedb.org/3/search/tv?api_key=b1f3b68aff2290b9c0157abb080d6c9f',
    searchInput: '',
    filmsList: [],
    trendList: [],
    TvList: [],
    MenuList:[],
    genreActive: [],
    flag: false,
});