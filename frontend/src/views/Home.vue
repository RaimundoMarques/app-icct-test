<template>
  <Navbar />
  <div class="home">
    <div class="main-container mb-5">
      <input
        id="search"
        type="text"
        v-model="searchLivro"
        placeholder="Digite o nome do livro"
        class="form-control w-50 m-auto"
      />
    </div>

    <table class="table m-auto w-50">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Autor</th>
          <th colspan="2">Ano Lançamento</th>
          <th scope="col">Tipo</th>
          <th scope="col">Gênero</th>
          <th scope="col">Editora</th>
          <th scope="col">Ano de Edição</th>
          <th scope="col">Número de Edição</th>
          <th colspan="2"></th>
        </tr>
      </thead>

      <tbody class="align-items-center">
        <tr v-for="livro in livros" :key="livro.id">
          <td>{{ livro.nome }}</td>
          <td>{{ livro.nomeDoAutor }}</td>
          <td colspan="2">{{ livro.lancamento }}</td>
          <td>{{ livro.tipo }}</td>
          <td>{{ livro.genero }}</td>
          <td>{{ livro.editora }}</td>
          <td>{{ livro.anoEdicao }}</td>
          <td>{{ livro.numEdicao }}</td>
          <td>
            <button class="btn btn-primary btn-sm" @click="showLivro(livro.id)">
              Visualizar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <Footer></Footer>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      searchLivro: "",
      livrosData: [],
    };
  },
  methods: {
    async carregarLivros() {
      try {
        const response = await axios.get("http://localhost:8000/livros");
        this.livrosData = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    showLivro(id) {
      // Redirecionar para a página de edição com o ID do livro
      this.$router.push(`/show-livro/${id}`);
    },
  },
  mounted() {
    this.carregarLivros();
  },
  computed: {
    livros() {
      // Filtrar os livros com base na pesquisa
      return this.livrosData.filter((livro) => {
        return livro.nome
          .toLowerCase()
          .includes(this.searchLivro.toLowerCase());
      });
    },
  },
};
</script>

<style>
.main-container {
  margin: 18vh auto 30vh auto;
}

.home{
  padding-bottom: 10vh;
}
thead th {
  background-color: #333;
  color: #fff;
}

.btn{
  margin: auto;
}

/* MOBILE */
</style>
