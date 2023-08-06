import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1b00fa78 = () => interopDefault(import('..\\pages\\account\\index.vue' /* webpackChunkName: "pages/account/index" */))
const _2f6b98f1 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _17474746 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _a3df7854 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _5efbbe0c = () => interopDefault(import('..\\pages\\register-success.vue' /* webpackChunkName: "pages/register-success" */))
const _2def8ef4 = () => interopDefault(import('..\\pages\\upload.vue' /* webpackChunkName: "pages/upload" */))
const _2460fd06 = () => interopDefault(import('..\\pages\\dashboard\\transactions.vue' /* webpackChunkName: "pages/dashboard/transactions" */))
const _481e7c46 = () => interopDefault(import('..\\pages\\transaction\\error.vue' /* webpackChunkName: "pages/transaction/error" */))
const _f03737e4 = () => interopDefault(import('..\\pages\\transaction\\finish.vue' /* webpackChunkName: "pages/transaction/finish" */))
const _7c49baa7 = () => interopDefault(import('..\\pages\\transaction\\unfinish.vue' /* webpackChunkName: "pages/transaction/unfinish" */))
const _b7b95cb2 = () => interopDefault(import('..\\pages\\dashboard\\projects\\create.vue' /* webpackChunkName: "pages/dashboard/projects/create" */))
const _0f27b783 = () => interopDefault(import('..\\pages\\dashboard\\projects\\_id\\index.vue' /* webpackChunkName: "pages/dashboard/projects/_id/index" */))
const _8764212e = () => interopDefault(import('..\\pages\\dashboard\\projects\\_id\\edit.vue' /* webpackChunkName: "pages/dashboard/projects/_id/edit" */))
const _cd350d46 = () => interopDefault(import('..\\pages\\projects\\_id.vue' /* webpackChunkName: "pages/projects/_id" */))
const _4d9fa42f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _1b00fa78,
    name: "account"
  }, {
    path: "/dashboard",
    component: _2f6b98f1,
    name: "dashboard"
  }, {
    path: "/login",
    component: _17474746,
    name: "login"
  }, {
    path: "/register",
    component: _a3df7854,
    name: "register"
  }, {
    path: "/register-success",
    component: _5efbbe0c,
    name: "register-success"
  }, {
    path: "/upload",
    component: _2def8ef4,
    name: "upload"
  }, {
    path: "/dashboard/transactions",
    component: _2460fd06,
    name: "dashboard-transactions"
  }, {
    path: "/transaction/error",
    component: _481e7c46,
    name: "transaction-error"
  }, {
    path: "/transaction/finish",
    component: _f03737e4,
    name: "transaction-finish"
  }, {
    path: "/transaction/unfinish",
    component: _7c49baa7,
    name: "transaction-unfinish"
  }, {
    path: "/dashboard/projects/create",
    component: _b7b95cb2,
    name: "dashboard-projects-create"
  }, {
    path: "/dashboard/projects/:id",
    component: _0f27b783,
    name: "dashboard-projects-id"
  }, {
    path: "/dashboard/projects/:id?/edit",
    component: _8764212e,
    name: "dashboard-projects-id-edit"
  }, {
    path: "/projects/:id?",
    component: _cd350d46,
    name: "projects-id"
  }, {
    path: "/",
    component: _4d9fa42f,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
