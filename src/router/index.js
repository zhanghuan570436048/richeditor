import Vue from 'vue'
import Router from 'vue-router'
import FuEditor from '../components/richeditor/fudeitor.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'fueditor',
    component: FuEditor
  }]
})
