<template>
  <div>
  <b-navbar toggleable="lg" type="light" variant="info">
    <b-navbar-brand href="#">Locadora</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Criar Filmes</b-nav-item>
        <b-nav-item href="#">Editar Filmes</b-nav-item>
        <b-nav-item href="#">Excluir Filmes</b-nav-item>
        <b-nav-item href="#">Listar Filmes</b-nav-item>
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

</style>
