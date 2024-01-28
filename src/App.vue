<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Axios from 'axios';


export default {
    data() {
        return { 
            
            store,
        }
    },
    components: {

        AppHeader,
        AppMain,
        
    },
    methods: {

        getResponse(){
            if(this.store.searchInput.length <= 0){
                this.store.flag = false;
            }else{

                this.store.flag = true;
            }

            Axios.get(this.store.baseUrlSearchMovie, {
                params: {
                    query: this.store.searchInput.length > 0 ? this.store.searchInput : null,
                }
            })
            .then((res)=> {

                this.store.filmsList = [];
                
                for(let i = 0; i < res.data.results.length; i++){
                    this.store.filmsList.push(res.data.results[i])
                };

            });

            Axios.get(this.store.baseUrlSearchTvSearies, {
                params: {
                    query: this.store.searchInput.length > 0 ? this.store.searchInput : null,
                }
            })
            .then((response)=> {

                this.store.TvList = [];

                for(let j = 0; j < response.data.results.length; j++){
                    this.store.TvList.push(response.data.results[j])
                };

            });
            
        },
    },
    created(){
        Axios.get(this.store.baseUrlCreate)
        .then((res)=>{
            for(let i = 0; i < 4; i++){
                this.store.trendList.push(res.data.results[i])
            };
        })
    },
}
</script>

<template>

    <header>
        <AppHeader @userSearch="getResponse()"/>
    </header>

    <main>
        <AppMain/>
    </main>
    
</template>

<style lang="scss">
    @use "../src/assets/scss/partials/variables" as *;
    @import "bootstrap/scss/bootstrap";

    body{
        background-color: $baseColor;
    }
</style>