import { createRouter, createWebHistory } from 'vue-router'

// Import your views
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Photo from "../pages/Photo.vue"
import Events from "../pages/Events.vue"
import History from "../pages/History.vue"
import EventDetail from "../pages/EventDetail.vue"
import PhotoDetail from "../pages/PhotoDetail.vue"

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/photo', name: 'Photo', component: Photo },
  { path: '/events', name: 'Events', component: Events },
  { path: '/history', name: 'History', component: History },
 
  { path: '/events/:id', name: 'EventDetail', component: EventDetail,props: true},
  { path: '/photo/:id', name: 'PhotoDetail', component: PhotoDetail,props: true},

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

