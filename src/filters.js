import Vue from 'vue';

Vue.filter('saldo', (time) => {
    return time.gm - time.gs
});

Vue.filter('ucwords', (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1)
});