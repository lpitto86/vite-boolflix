<script>
import axios from 'axios';
import { store } from '../store.js';
import SingleProduct from './SingleProduct.vue';

export default {
    data() {
        return {
            store
        };
    },
    methods: {

    },
    components:{
        SingleProduct,
    },
    mounted(){
        axios.get(this.store.trendUrlMovies)
            .then((response)=>{
                this.store.movies = response.data.results;
                console.log('Array film',this.store.movies);

            });

        axios.get(this.store.trendUrlSeries)
            .then((response)=>{
                this.store.series = response.data.results;
                console.log('Array serie',this.store.series);
            });

    },
}
</script>

<template>
    <main class="bg-black">
        <div class="container-fluid px-4">
            <div class="text-white">
                <h2 class="fw-bold py-4">Movies</h2>
                <hr>
                <div class="row justify-content-center">
                    <SingleProduct v-for="(elem, i) in this.store.movies" :key="i" :singleProduct="elem" :name="elem.title"  :originalName="elem.original_title" :type="'movie'"/>
                </div>
            </div>
    
    
            <div class="text-white">
                <h2 class="fw-bold pt-5 pb-4">Tv Series</h2>
                <hr>
                <div class="row justify-content-center ">
                    <SingleProduct v-for="(elem, j) in this.store.series" :key="j" :singleProduct="elem" :name="elem.name"  :originalName="elem.original_name" :type="'tv'"/>
                </div>
            </div>
        </div>
    </main>
    
</template>

<style lang="scss" scoped>
    main{
        padding-top: 100px;
    }
    hr{
        border: 1px solid rgb(112, 112, 112);
    }
</style>