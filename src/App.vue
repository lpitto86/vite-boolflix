<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import { store } from './store.js';

export default {
    data() {
        return {
            store

        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },  
    methods: {

    },
    created(){
        axios.get(this.store.baseUrlMovies)
        .then((response)=>{
            this.store.movies = response.data.results;
            console.log(this.store.movies);
        });
    }
}
</script>

<template>

    <AppHeader />

    <AppMain />

</template>

<style lang="scss">
@use "assets/scss/partials/reset" as *;
@use "assets/scss/main" as *;
</style>