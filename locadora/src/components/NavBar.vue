<template>
  <div>
  <b-navbar toggleable="lg" type="dark  " variant="info">
    <b-navbar-brand href="#">Locadora</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    

    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml">
        <b-nav-item-dropdown text="Filmes">
          <b-dropdown-item href="#">Criar Filmes</b-dropdown-item>
          <b-dropdown-item href="#">Editar Filmes</b-dropdown-item>
          <b-dropdown-item href="#">Excluir Filmes</b-dropdown-item>
          <b-dropdown-item href="#">Listar Filmes</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Lang">
          <b-dropdown-item href="#">Criar Diretores</b-dropdown-item>
          <b-dropdown-item href="#">Editar Diretores</b-dropdown-item>
          <b-dropdown-item href="#">Excluir Diretores</b-dropdown-item>
          <b-dropdown-item href="#">Listar Diretores</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>      
    </b-collapse>
  </b-navbar>
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
