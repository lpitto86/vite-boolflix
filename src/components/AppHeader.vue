<script>
    import { store } from '../store';

    export default {
        data() {
            return { 
                store
            }
        },
    }
    </script>

<template>
   <div class="row p-4 justify-content-between g-0">
        <div class="text-white d-flex justify-content-center align-items-center logo-frame">
            <img src="../assets/img/boolflix-logo.svg" alt="Boolflix_logo">
        </div>

        <form class="col-2 d-flex justify-content-center align-items-center" @submit.prevent="$emit('userSearch')">
            <div class=" w-75">
                <input
                v-model="store.searchInput"
                type="text"
                class="form-control"
                placeholder="Search character"
                aria-label="Search character">
            </div>
            
            
            <button type="submit" class="btn btn-primary">
                Cerca
            </button>
            
            
        </form>
   </div>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/header.scss';
</style>