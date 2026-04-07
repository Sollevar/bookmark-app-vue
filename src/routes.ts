import { createRouter, createWebHistory } from 'vue-router';
export const router = createRouter({
    routes: [
        {
            path: '/', component: () => import ('./views/AuthView.vue'),
        },
        {
            path: '/main', component:() => import ('./views/MainView.vue'),
            children: [
                {
                    path: '', component: () => import('./components/Main.vue'), name:'main'
                },
                {
                    path: 'films', component:() => import ('./components/Second.vue'),
                }
            ]
        }
    ],
    history: createWebHistory(),
})