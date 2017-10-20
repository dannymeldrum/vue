import Vue                      from 'vue/dist/vue.min';
import template                 from './page-01.vue!text';

const Page01 = Vue.component('Page01', {
    props: {
        content: {
            default: {
                title: 'Page 01 Title',
                para: 'test para'
            },
            type: Object
        }
    },
    template
});

export default Page01;