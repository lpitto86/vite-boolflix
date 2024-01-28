import { createApp } from 'vue';
import App from './App.vue';
import * as bootstrap from 'bootstrap';
import '@popperjs/core';
import axios from 'axios';

createApp(App).mount('#app')


let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

document.querySelector('button').addEventListener('click', function() {
    var input = document.querySelector('input');
    if (input.value.trim() === '') {
        input.setCustomValidity('Per favore, inserisci del testo.');
    } else {
        input.setCustomValidity('');
    }
    var form = input.closest('form');
    form.classList.add('was-validated');
});