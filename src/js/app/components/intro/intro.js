import Vue                      from 'vue/dist/vue.min';
import template                 from './intro.vue!text';

const Intro = Vue.component('Intro', {
    props: {
        content: {
            default: {
                title: 'Intro Title',
                para: 'test para'
            },
            type: Object
        }
    },
    template
});

export default Intro;