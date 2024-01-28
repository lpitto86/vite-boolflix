<script>
import AppHeader from './components/AppHeader.vue';

import axios from 'axios';

export default {
  data() {
    return {
      searchText: ''
    };
  },
  components: {
    AppHeader,
  },
  methods: {
    search() {
      axios
        .get('https://api.themoviedb.org/3/search/movie?api_key=')
        .then((response) => {
          console.log(response);
        });
    }
  }
}
</script>

<template>

  <header>
    {{ searchText }}
    <input v-model="searchText" type="text" placeholder="Inserisci il nome di un film...">
    <button @click="search()">
      Cerca
    </button>
  </header>
  <h1>
    Mia App
  </h1>
  <AppHeader/>
</template>

<style lang="scss">

  @import './styles/generals.scss';
  @import '../node_modules/bootstrap/scss/bootstrap';
</style>
