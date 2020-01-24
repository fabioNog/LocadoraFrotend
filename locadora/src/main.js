import Vue from 'vue'
import App from './App.vue'

//Bootrastrap Framework
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)

//import components Filmes
import CriarFilme from './components/Filmes/CriarFilme'
import EditarFilme from './components/Filmes/EditarFilme'
import ExcluirFilme from './components/Filmes/ExcluirFilme'
import ListarFilme from './components/Filmes/ListarFilme'

//import components Diretores
import CriarDiretor from './components/Diretores/CriarDiretor'
import EditarDiretor from './components/Diretores/EditarDiretor'
import ExcluirDiretor from './components/Diretores/ExcluirDiretor'
import ListarDiretor from './components/Diretores/ListarDiretor'

//import Router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  //Filmes
  {path: "/criarfilme",component: CriarFilme},
  {path: "/editarfilme",component: EditarFilme},
  {path: "/excluirfilme",component: ExcluirFilme},
  {path: "/listarfilme",component: ListarFilme},
  //Diretores
  {path: "/criardiretor",component: CriarDiretor},
  {path: "/editardiretor",component: EditarDiretor},
  {path: "/excluirdiretor",component: ExcluirDiretor},
  {path: "/listardiretor",component: ListarDiretor},
]

const router = new VueRouter({
  routes
})




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
