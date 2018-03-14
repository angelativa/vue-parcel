import Vue from 'vue'
import Main from './Main.vue'
import router from './router'

import 'iview/dist/styles/iview.css'

import {
    Layout,
    Header,
    Content,
    Footer,
    Table,
    Card,
    Button
} from 'iview'

Vue.component('Layout', Layout)
Vue.component('Header', Header)
Vue.component('Content', Content)
Vue.component('Footer', Footer)
Vue.component('Table', Table)
Vue.component('Card', Card)
Vue.component('Button', Button)

new Vue({
    el: '#main',
    router,
    render: h => h(Main)
});