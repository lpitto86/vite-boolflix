<script>
import axios from 'axios';
import { store } from '../store.js';
export default {
    data() {
        return {
            store
        };
    },
    methods: {
        getDataFromAPi(){
            this.store.movies = []
            this.store.series = []

            let queryString = this.store.searchName;

            let finalUrlStringMovie = this.store.baseUrlMovies + queryString;
            let finalUrlStringSerie = this.store.baseUrlSeries + queryString;

            
            axios.get(finalUrlStringMovie)
            .then((response)=>{
                this.store.movies = response.data.results;
                console.log('Array film',this.store.movies);
            });
            
            axios.get(finalUrlStringSerie)
            .then((response)=>{
                this.store.series = response.data.results;
                console.log('Array serie',this.store.series);
            });
            
            this.store.searchName = '';
        }

    }
}
</script>

<template>
    <header class=" w-100 bg-black py-4 position-fixed z-1 my-border-bottom">
        <div class="container-fluid px-4">
            <div class="row justify-content-between align-items-center">

                <div class="logo-container">
                    <h2 class="my-netflix-logo">Boolflix</h2>
                    <!-- <img class="w-100" src="../../public/LogoNetflix.png" alt="Logo Netflix"> -->
                </div>

                <div class="col-auto">
                    <form @submit.prevent="getDataFromAPi()" class="d-flex">
                        <div class="me-3">
                            <input v-model="this.store.searchName" type="text" class="my-input form-control" placeholder="Cerca un film o una serie...">
                        </div>
                        <div>
                            <button class="btn my-search-button text-white">Cerca</button>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

    .my-border-bottom{
        border-bottom: 1px solid rgb(31, 31, 31);
    
    }
    .logo-container{
        width: 150px;

        .my-netflix-logo{
            color: $netflix_color;
            text-transform: uppercase;
            font-family: 'bebas neue';
            margin: 0;
            font-size: 2.5em;
        }
    }

    .my-input{
        width: 400px;
    }
    .my-search-button{
        background-color: $netflix_color;
    }

</style>