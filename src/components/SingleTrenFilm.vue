<script>
    import { store } from '../store';

    export default {
        data() {
            return { 
                
                store
            }
        },
        props: {
            SingleObject: Object,
            imageBackground: String,
        },
        methods:{
            
        },
        mounted(){
            
        },
        updated(){
            
        }
        
       
    }
    </script>

<template>
   <div class="movie-card">
        <img v-if="SingleObject.poster_path !== null" :src="imageBackground" alt="">
        <div v-else class="w-100 h-100 bg-danger d-flex justify-content-center align-items-center">
            <h3>Unknow</h3>
        </div>
   </div>
</template>

<style lang="scss" scoped>
    .movie-card{
        width: calc(100% / 5);
        margin: 20px 10px;
        height: 500px;
        border: 0.4px solid rgb(133, 0, 0);
        padding: 0;
        
        overflow: hidden;
        background-color: white;
        position: relative;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }    
    }
</style>