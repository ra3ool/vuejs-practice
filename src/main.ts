import plugins from '@shared/plugins';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

const app = createApp(App);
app.use(plugins);
app.mount('#app');
