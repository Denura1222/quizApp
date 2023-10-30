import { createRouter, createWebHistory } from 'vue-router';
import QuizView from "../views/quizeView.vue"
import Home from "../views/home.vue"
import signIn from "../views/signIn.vue"
import profile from "../views/profile.vue"




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
    {
        path: "/signIn",
        name: 'signIn',
        component: signIn
    },
    {
        path: "/profile",
        name: 'profile',
        component: profile

    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router