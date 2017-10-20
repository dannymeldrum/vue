import Vue                      from 'vue/dist/vue.min';
import template                 from './page-02.vue!text';

const Page01 = Vue.component('Page02', {
    props: {
        content: {
            default: {
                title: 'Page 02 Title',
                para: 'test para'
            },
            type: Object
        }
    },
    template
});

export default Page01;