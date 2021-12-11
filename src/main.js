import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import VueKonva from 'vue-konva';
import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';
Vue.use(VueKonva);
Vue.use(Ionic);
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
