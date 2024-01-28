<script>
    import Axios from 'axios';
    import { store } from '../store';

    export default {
        data() {
            return { 
                
                store,
                cast: [],
                genre: [],
                castFlag: false,
            }
        },
        props: {
            FilmObj: Object,
            imageBackground: String,
            MediaName: String,
            OriginalMediaName: String,
            media: String,
        },
        methods:{
            formattFlag(){
                this.FilmObj.original_language = this.FilmObj.original_language.toUpperCase();

                if(this.FilmObj.original_language == 'EN'){
                    this.FilmObj.original_language = 'GB'
                }
                else if(this.FilmObj.original_language == 'JA'){
                    this.FilmObj.original_language = 'JP'
                }
                else if(this.FilmObj.original_language == 'KO'){
                    this.FilmObj.original_language = 'KR'
                }
            },
            roundedRating(x){
                x = Math.round(x);
                x = x / 2;
                x = Math.ceil(x);
                return x;
            },
            getCredit(elementId){        
                
                Axios.get('https://api.themoviedb.org/3/'+ this.media +'/'+ elementId +'/credits?api_key=b1f3b68aff2290b9c0157abb080d6c9f')
                .then((res)=> {
                    for(let i = 0; i < 4; i++){

                        this.cast.push(res.data.cast[i]);
                    }
                });

                Axios.get('https://api.themoviedb.org/3/'+ this.media +'/'+ elementId +'?api_key=b1f3b68aff2290b9c0157abb080d6c9f')
                .then((res)=>{
                    
                    this.genre = res.data.genres

                }).catch((error) => {
                console.error('Error', error);
                });
            },

            castFlagSwitch(){
                this.castFlag = !this.castFlag
            },
        },
        mounted(){
            this.formattFlag();
            this.getCredit(this.FilmObj.id);
        },
        updated(){
            this.formattFlag();
        }
        
       
    }
    </script>

<template>
    <div class="movie-card"
    v-if="genre.some(elem => this.store.genreActive.includes(elem.name)) || this.store.genreActive.length == 0"
    @click="castFlagSwitch()">
        <img v-if="FilmObj.poster_path !== null" :src="imageBackground" alt="">
        <div v-else class="w-100 h-100 bg-danger d-flex justify-content-center align-items-center">
            <h3>Unknow</h3>
        </div>
        <div class="info">
            <h5>{{ MediaName }}</h5>
            <span>{{ OriginalMediaName }}</span>

            <div>
                <img :src="'https://flagsapi.com/'+ FilmObj.original_language +'/flat/64.png'" alt="">
            </div>

            <div class="w-100">
                <i v-for="(elem, i) in 5" class="fa-star" :class="{
                    'fa-regular': roundedRating(FilmObj.vote_average) <= i,
                    'fa-solid': roundedRating(FilmObj.vote_average) > i,
                }"></i>
            </div>

            <p>
                {{ FilmObj.overview }}
            </p>
            
        </div>

        <div v-if="castFlag == true" class="info-cast mb-0">
            <h4>Cast</h4>
            <div v-for="(elem, i) in cast">
                <span>
                    {{ elem.name }}
                </span>
            </div>
            <div class="mt-3">
                <h4>Genere</h4>
                <div v-for="(elem, i) in genre">
                    <span v-if="this.genre.length > 0">
                        {{ elem.name }}
                    </span>
                    <span v-else>
                        unknow
                    </span>
                </div>
            </div>
        </div>
   </div>

   
   
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
    .movie-card{
        cursor: pointer;
        width: calc(100% / 5);
        margin: 20px 10px;
        height: 380px;
        padding: 0;
        border-radius: 8px;
        overflow: hidden;
        background-color: white;
        position: relative;

        
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        > .info{
            padding: 10px;
            width: 100%;
            height: 100%;
            padding-top: 10px;
            position: absolute;
            bottom: 0;
            color: white;
            background: rgb(0,6,70);
            background: linear-gradient(0deg, rgb(70, 0, 0) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.7) 100%); 
            text-align: center;
            filter: opacity(0);
            backdrop-filter: blur( 3.5px );
            transition: all .2s ease-in-out;
            &:hover{
                filter: opacity(1);
            }
            span{
                display: block;
            }
            > div{
                width: 50px;
                margin: 0 auto;
                img{
                    width: 100%;
                }

            }
            >p{
                font-size: 0.8em;
                height: 45%;
                margin-top: 8px;
                overflow: auto;
            }
            
            ::-webkit-scrollbar {
                width: 10px;
            }

            ::-webkit-scrollbar-thumb {
                background-color: #805454;
            }

            ::-webkit-scrollbar-track {
                background-color: #412d2d;
            }

        }

        > .info-cast{
        position: absolute;
        bottom: 0;
        padding: 10px;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: rgba(30, 30, 30, 0.8);
        color: white;
        span{
            margin: 5px 0;
        }
    }
    }

    
</style>