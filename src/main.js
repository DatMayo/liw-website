import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import { routes, scrollBehavior } from './routes.js';
import './assets/site.css';

export const createApp = ViteSSG(App, { routes, scrollBehavior });
