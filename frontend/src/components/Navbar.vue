<template>
  <div id="nav">
    <!-- NAVBAR -->
    <div class="row row-cols-3 w-75 m-auto">
      <!-- LOGO -->
      <div class="col-sm-4">
        <router-link to="/">
          <abbr title="Voltar para Login">
            <img
              src="/img/logo-biblioteca.jpeg"
              alt="Imagem do Livro"
              id="logo"
              class="img-fluid"
            />
          </abbr>
        </router-link>
      </div>

      <!-- TÍTULO -->
      <div class="col-sm-4 text-center">
        <div class="container fs-1">Biblioteca</div>
      </div>

      <!-- BARRA NAVBAR -->
      <div class="col-sm-4">
        <div class="btn-group mt-2" role="group" aria-label="Basic example">
          <router-link to="/home">Home</router-link>
          <router-link to="/cria-livro">Novo</router-link>
          <router-link to="/">Sair</router-link>
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

<style>
ul {
  margin-top: 10px;
  margin-left: 15px;
  border: 1px solid #fff;
  width: 30vh;
}
ul li {
  display: inline;
  border: 1px solid #fff;
  width: 100%;
}

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
  padding: 4px;
  border-bottom: none;
  cursor: pointer;
}

#nav a {
  color: #fcba03;
  text-decoration: none;
  margin: 12px;
  transition: 0.5s;
  font-size: 22px;
}
</style>
