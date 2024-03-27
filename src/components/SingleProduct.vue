<script>
import axios from 'axios';
export default {
    data() {
        return {
            cast: []
        };
    },
    methods: {
        manageFlagLanguage(){
            this.singleProduct.original_language = this.singleProduct.original_language.toUpperCase();
            if(this.singleProduct.original_language == 'EN'){
                this.singleProduct.original_language = 'US'
            }
            if(this.singleProduct.original_language == 'JA'){
                this.singleProduct.original_language = 'JP'
            }
            if(this.singleProduct.original_language == 'KO'){
                this.singleProduct.original_language = 'KR'
            }
            if(this.singleProduct.original_language == 'HI'){
                this.singleProduct.original_language = 'IN'
            }
        },
        voteMathFloor(x){
            x = Math.round(x);
            x = x / 2;
            x = Math.ceil(x);
            return x
             
        },
        getDataCast(){
            this.cast = [];
            axios.get('https://api.themoviedb.org/3/'+this.type+'/'+this.singleProduct.id+'/credits?api_key=dfa13031b80dd317ebfeae295f5282f6')
                .then((response)=>{
                    for(let i = 0; i < 5; i++){
                        this.cast.push(response.data.cast[i].name)
                    }
                })
                .catch((error)=>{
                    this.cast.name = 'Not found'

                });
        }
    },
    props:{
        singleProduct: Object,
        name: String,
        originalName: String,
        type : String
    },
    mounted(){
        this.manageFlagLanguage();
        this.singleProduct.vote_average = this.voteMathFloor(this.singleProduct.vote_average);
        this.getDataCast();
    }
}
</script>

<template>
    <div class="single-card-container">
        <img v-if="singleProduct.poster_path !== null" :src="'https://image.tmdb.org/t/p/w780/'+singleProduct.poster_path" :alt="singleProduct.title">
        <img v-else class="d-block object-fit-cover w-100 h-100" src="../../public/NotFound.jpg" alt="Image not found">
        <ul class="my-info-text text-start px-4">
            <li class="mb-2">Titolo: "{{name}}"</li>
            <li class="mb-2">Titolo originale: "{{originalName}}"</li>
            <li>Lingua: {{singleProduct.original_language}}</li>
            <li class="mb-2"><img class="country-flag" :src="'https://flagsapi.com/'+singleProduct.original_language+'/flat/64.png'" alt=""></li>
            <li class="mb-2 d-inline-block pe-2">Rating: {{singleProduct.vote_average}}</li>
            <li class="d-inline-block" v-for="i in 5">
                <i :class="singleProduct.vote_average >= i ? 'active' : '' " class="px-1 fa-solid fa-star"></i>
            </li>
            <li class="fs-em pb-3 my-overview">Overview: {{ singleProduct.overview }}</li>
            <li class="fw-bold">Cast:</li>
            <li v-for="(singleName, i) in cast" class="fs-em"> &bull; {{ singleName }}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .fs-em{
        font-size: 0.8em;
    }
    .single-card-container{
        width: calc((100% / 4) - 40px);
        border: 0.5px solid #E50C14;
        border-radius: 20px;
        margin: 20px 20px;
        padding: 0;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        transition: 0.3s ease-in-out;

        &:hover{
            scale:1.1;
        }

        &:hover .my-info-text{
            display: block;
            background-color: rgba($color: #000000, $alpha: 0.8);
            &::-webkit-scrollbar {
            width: 7px;
            }
            &::-webkit-scrollbar-thumb {
            background: #E50C14;
            border-radius: 5px;
            }
        }
        
        img{
            display: block;
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
        
        .my-info-text{
            position: absolute;
            bottom: 0px;
            display: none;
            height: 100%;
            overflow: auto;
            padding: 10px 0;
        }

        .country-flag{
            width: 50px;
            height: 50px;
        }
        .active{
            color: #E50C14;
        }
    }
</style>