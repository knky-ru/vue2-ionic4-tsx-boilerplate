import Vue from 'vue';
import { IonicVueRouter } from '@ionic/vue';
import Home from './views/Home';
Vue.use(IonicVueRouter);
export default new IonicVueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
        {
            path: '/pixi',
            name: 'pixi',
            component: () => import(/* webpackChunkName: "about" */ './views/Pixi.tsx'),
        },
    ],
});
