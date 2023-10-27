import { createRouter, createWebHistory } from 'vue-router';
import QuizView from "../views/quizeView.vue"
import Home from "../views/home.vue"




const routes = [
    {
        path: "/",
        name: 'home',
        component: Home
    },
   
    {
        path: "/quiz/:id",
        name: 'quiz',
        component: QuizView
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router