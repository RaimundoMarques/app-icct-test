<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      logo_src: "/img/logo-biblioteca.jpeg",
      app_name: "Livraria",
    };
  },
};
</script>

<style>
* {
  font-family: Helvetica, sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: #fff;
}

html,
body {
  background-color: rgb(190, 190, 190);
}

h2 {
  color: #333;
}

.home,
.newLivro,
.sair {
  margin-top: 15px;
}
</style>
