<script>

import { store } from '../store'

export default {
    data() {
        return {
            store
        }
    },
}

</script>

<template lang="">

<header>

        <div class="container">
            <div class="row d-flex justify-content-between">
                <div class="col-6 mt-3 mb-3">
                  <h1><a href="https://michelecanini-boolflix.netlify.app/" style="text-decoration: none;">BOOLFLIX</a></h1>
                </div>
                <div class="col-6 mt-4 mb-2">
                  <form @submit.prevent="searchMovie">
                      <div class="input-group">
                          <input type="search" class="form-control rounded" placeholder="Cerca Film e Serie TV" aria-label="Search" aria-describedby="search-addon" v-model="store.searchText" @keyup.enter="$emit('search')" required />
                          <div class="invalid-feedback">Per favore, inserisci del testo.</div>
                          <button type="button" class="btn btn-outline-primary" @click="$emit('search')">search</button>
                      </div>
                  </form>

                </div>
            </div>
        </div>
    </header>

</template>

<style lang="scss">

header{
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #0e0e0e;
    z-index: 1;

    h1 a{
        color: red;
    }
}

.invalid-feedback {
    position: absolute;
    left: 0%;
    top: 90%;
}

</style>