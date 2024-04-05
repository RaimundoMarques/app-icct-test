<template>
  <div id="nav">
    <!-- NAVBAR -->
    <div class="row row-cols-3">
      <!-- LOGO -->
      <div class="col-sm-4">
        <router-link to="/">
          <img
            src="/img/logo-biblioteca.jpeg"
            alt="Imagem do Livro"
            id="logo"
            class="img-fluid"
          />
        </router-link>
      </div>

      <!-- TÍTULO -->
      <div class="col-sm-4 text-center">
        <div class="container fs-1">
          Biblioteca
        </div>
      </div>

      <!-- BARRA NAVBAR -->
      <div class="col-sm-4">

        <!-- LINKS -->
        <div class="row row-cols-3 text-center links">

          <div class="col-sm-3 fs-5">
            <router-link to="/home" id="home">Home</router-link>
          </div>

          <div class="col-sm-6 fs-5">
            <router-link to="/criaLivro" id="newLivro">Novo Livro</router-link>
          </div>

          <div class="col-sm-3 fs-5">
            <router-link to="/" id="sair">Sair</router-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
#title-navbar {
  color: #fff;
}

#nav {
  position: fixed;
  background-color: #222;
  border-bottom: 4px solid #111;
  width: 100%;
  top: 0;
}

#nav #logo-url {
  margin: auto;
  margin-left: 0;
}

#logo {
  width: 60px;

  border-radius: 2px;
}

#nav a {
  color: #fcba03;
  text-decoration: none;
  margin: 12px;
  transition: 0.5s;
  font-size: 22px;
}

#nav a:hover {
  color: #fff;
}
</style>
