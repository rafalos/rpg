import Vue from 'vue'
import Router from 'vue-router'
import Journey from "./views/Journey"
import Character from "./views/Character"
import Inventory from "./views/Inventory"
import Setup from "./views/Setup"
import Skills from "./views/Skills"
import Shop from "./views/Shop"
import Location from "./views/Location"
import Forge from "./views/Forge"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/character",
      component: Character
    },
    {
      path: "/inventory",
      component: Inventory
    },
    {
      path:"/journey",
      component: Journey
    },
    {
      path: "/setup",
      component: Setup
    },
    {
      path: "/skills",
      component: Skills
    },
    {
      path: "/shop",
      component: Shop
    },
    {
      name: "location",
      path: "/journey/:location",
      component: Location,
    },
    {
      path: "/forge",
      component: Forge
    }
  ]
})
