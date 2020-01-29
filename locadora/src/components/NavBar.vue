<template>
  <div>
  <b-navbar toggleable="lg" type="dark  " variant="info">
    <b-navbar-brand href="#">
    <router-link to=/>Locadora</router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    

    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml">
        <b-nav-item-dropdown text="Filmes">        
          <b-dropdown-item href="#">
            <router-link to=/criarfilme>Criar Filmes</router-link>
          </b-dropdown-item>        
          <b-dropdown-item href="#">
            <router-link to=/editarfilme>Editar Filmes</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to=/excluirfilme>Excluir Filmes</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to=/listarfilme>Listar Filmes</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Diretores">
          <b-dropdown-item>
            <router-link to=/criardiretor>Criar Diretores</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to=/editardiretor>Editar Diretores</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to=/excluirdiretor>Excluir Diretores</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to=/listardiretor>Listar Diretores</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>      
    </b-collapse>
  </b-navbar>
  <router-view>
  </router-view>
</div>

</template>

<script>
export default {
  name: 'NavBar',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  background-color: black !important;
}
.navbar .navbar-brand{
    color: white !important;
}

</style>
