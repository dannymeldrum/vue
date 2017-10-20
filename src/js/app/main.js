window.process = { env: "development" };

import Vue                      from 'vue/dist/vue.min';
import VueRouter                from 'vue-router';

import Intro                    from './components/intro/intro';
import Page01                   from './components/page-01/page-01';
import Page02                   from './components/page-02/page-02';

Vue.config.devtools = true;
Vue.config.debug = true;

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'intro',
        component: Intro
    },
    {
        path: '/page-01',
        name: 'page01',
        component: Page01
    },
    {
        path: '/page-02',
        name: 'page02',
        component: Page02
    }
];

const router = new VueRouter({
    routes
});

const Main = class {

    constructor() {

        let components = new Vue({
            el: '#app',
            router
        });

    }

};

export default Main;
