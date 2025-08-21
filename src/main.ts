import router from '@shared/router/index';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
