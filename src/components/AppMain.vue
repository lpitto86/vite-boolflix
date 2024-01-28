<script>
    import SingleFilm from './SingleFilm.vue';
    import SingleTrendFilm from './SingleTrenFilm.vue';
    import MenuGenre from './MenuGenere.vue';
    import { store } from '../store.js';
    import Axios from 'axios';


    export default {
        data() {
            return { 
                store,
                menuFlag: false,
            }
        },
        components: {

            SingleFilm,
            SingleTrendFilm,
            MenuGenre
        },
        methods:{
           getMenu(){
                Axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=b1f3b68aff2290b9c0157abb080d6c9f')
                .then((res) => {
                    for(let i = 0; i < res.data.genres.length; i ++){
                        this.store.MenuList.push(res.data.genres[i].name)
                    }
                });

                Axios.get('https://api.themoviedb.org/3/genre/tv/list?api_key=b1f3b68aff2290b9c0157abb080d6c9f')
                .then((response) => {
                    for(let i = 0; i < response.data.genres.length; i ++){
                        if(!this.store.MenuList.includes(response.data.genres[i].name)){
                            this.store.MenuList.push(response.data.genres[i].name)
                        }
                    }
                });
                console.log(this.store.MenuList)
           },

           filterGenre(filmGenre){
            const genreIndex = this.store.genreActive.indexOf(filmGenre);

            if (genreIndex !== -1) {
                
                this.store.genreActive.splice(genreIndex, 1);
            } else {
                
                this.store.genreActive.push(filmGenre);
            }
           },

           switchFlag(){
            this.menuFlag = !this.menuFlag
           }
        },

        mounted(){
            this.getMenu()
        },
    }
    </script>

<template>
    <div class="container-xxl pt-5 position-relative">
        
        <div class="row">
                <div class="col-12 text-white d-flex justify-content-end position-relative">
                    <button @click="switchFlag()">Filter</button>
                    <ul class="menu-genre" v-if="menuFlag == true">
                        <MenuGenre v-for="(elem, i) in this.store.MenuList"
                        @click="filterGenre(elem)"
                        :nomeGenere="elem"/>
                    </ul>
                </div>
        </div>

        <div v-if="this.store.flag == false" class="row justify-content-center flex-wrap">

            <div class="col-12 text-white">
                <h2 class="m-0">I più visti di oggi</h2>
            </div>
            

            <SingleTrendFilm v-for="(elem, i) in this.store.trendList"
            :key="i"
            :SingleObject="elem"
            :imageBackground="'https://image.tmdb.org/t/p/w780'+elem.poster_path"
            />
        </div>

        <div v-else class="row justify-content-center  flex-wrap">

            <div class="col-12 text-white">
                <h2 class="m-0">Film</h2>
            </div>
            <SingleFilm v-for="(elem, i) in this.store.filmsList"
            :key="i"
            :FilmObj="elem"
            :imageBackground="'https://image.tmdb.org/t/p/w780'+elem.poster_path"
            :MediaName="elem.title"
            :OriginalMediaName="elem.original_title"
            :media="'movie'"
            />

            <div class="col-12 text-white my-3">
                <h2 class="m-0">Tv Series</h2>
            </div>
            <SingleFilm v-for="(elem, i) in this.store.TvList"
            :key="i"
            :FilmObj="elem"
            :imageBackground="'https://image.tmdb.org/t/p/w780'+elem.poster_path"
            :MediaName="elem.name"
            :OriginalMediaName="elem.original_name"
            :media="'tv'"/>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    @import '../assets/scss/main.scss';
</style>