<script>
    import { store } from '../store';

    export default {
        data() {
            return { 
                
                store,
                active: false,
            }
        },
        props: {
            nomeGenere : String,
        },
        methods:{
            switchActive(){
                this.active = !this.active
            }
        },
        mounted(){
            
        },
        updated(){
            
        }
        
       
    }
    </script>

<template>
   <li @click="switchActive()" class=" text-center py-2 list-unstyled" :class="{
    'active': active == true
   }"  >
        {{ nomeGenere }}
   </li>
</template>

<style lang="scss" scoped>
    li{
        background-color: rgb(33, 33, 33);
        padding: 5px;
        border-bottom: 1px solid rgba(128, 128, 128, 0.683);
        cursor: pointer;
        &.active{
            background-color: rgb(192, 192, 192);
            color: black;
        }
    }

    
</style>