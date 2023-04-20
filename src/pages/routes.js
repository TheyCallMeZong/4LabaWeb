import {createRouter} from 'vue-router'
import HomePage from './home/Home.vue';
import SignIn from '@/pages/user/sign-in/SignIn.vue';
import Cart from '@/pages/cart/Cart.vue';
import About from "@/pages/about/About.vue";
import Authorize from "@/pages/user/authorize/Authorize.vue";
import Catalog from "@/pages/catalog/Catalog.vue";
import Arrivals from "@/pages/arriavlas/Arrivals.vue";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/sign-in/',
        component: SignIn
    },
    {
        path: '/cart/',
        component: Cart
    },
    {
        path: "/about/",
        component: About
    },
    {
        path: "/authorize/",
        component: Authorize
    },
    {
        path: "/catalog/",
        component: Catalog
    },
    {
        path: "/arrival/",
        component: Arrivals
    }
]

export default function (history){
    return createRouter({
        history,
        routes
    })
}