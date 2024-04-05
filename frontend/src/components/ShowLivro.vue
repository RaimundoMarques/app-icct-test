<template>
  <Navbar />
  <div class="main-container">
    <h2 class="text-center">
      {{ mode === "adicionar" ? "Adicionar Livro" : "Livro" }}
    </h2>

    <div class="container register-container">
      <form @submit.prevent="editForm">
        <div class="row row-cols-2">
          <div class="col-md-6">
            <div class="form-group mt-3">
              <label for="name">Nome</label>
              <input
                type="text"
                class="form-control"
                v-model="livro.nome"
                placeholder="Nome do livro"
              />
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group mt-3">
              <label for="nameDoAutor">Nome do autor</label>
              <input
                type="text"
                class="form-control"
                v-model="livro.nomeDoAutor"
                placeholder="Autor do livro"
              />
            </div>
          </div>
        </div>

        <div class="row row-cols-2">
          <div class="col-md-6">
            <div class="form-group mt-3">
              <label for="lancamento">Ano de lançamento</label>
              <input
                type="text"
                class="form-control"
                v-model="livro.lancamento"
                placeholder="Ano de Lançamento"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mt-3">
              <label for="tipo">Tipo do livro</label>
              <input
                type="text"
                class="form-control"
                v-model="livro.tipo"
                placeholder="Digite o tipo do livro"
              />
            </div>
          </div>
        </div>

        <div class="row row-cols-2">
          <div class="col-md-6">
            <div class="form-group mt-3">
              <label for="genero">Gênero</label>
              <input
                type="text"
                class="form-control"
                v-model="livro.genero"
                placeholder="Gênero do livro"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mt-3">
              <label for="editora">Editora</label>
              <input
                type="text"
                class="form-control"
                v-model="livro.editora"
                placeholder="Qual a editora do Livro"
              />
            </div>
          </div>
        </div>

        <div class="row row-cols-2">
          <div class="col-md-6">
            <div class="form-group mt-3">
              <label for="anoEdicao">Ano de edição</label>
              <input
                type="text"
                class="form-control"
                v-model="livro.anoEdicao"
                placeholder="O ano da Edição do Livro"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mt-3">
              <label for="numEdicao">Nº da edição</label>
              <input
                type="text"
                class="form-control"
                v-model="livro.numEdicao"
                placeholder="Número da edição"
              />
            </div>
          </div>
        </div>

        <!-- BUTTONS ACTIVES -->
        <div class="row row-cols-2">
          <div class="col-md-6">
            <button class="btn card-btn-edit mt-4" @click="editar(livro)">
              Editar
            </button>
          </div>
          <div class="col-md-6">
            <button class="btn card-btn-delete mt-4" @click="remover(livro.id)">
              Deletar
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import axios from "axios";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default {
  name: "ShowLivro",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      livro: {
        id: "",
        nome: "",
        nomeDoAutor: "",
        lancamento: "",
        tipo: "",
        genero: "",
        editora: "",
        anoEdicao: "",
        numEdicao: "",
      },
    };
  },
  methods: {
    async editar(livro) {
      try {
        await axios.patch(
          `http://localhost:8000/livro/${this.livro.id}`,
          this.livro
        );

        alert("Livro editado com sucesso!");
        this.$router.push("/home");
      } catch (error) {
        console.error(error);
      }
    },

    async remover(id) {
      try {
        await axios.delete(`http://localhost:8000/livro/${id}`);
        // this.livrosData = this.livrosData.filter((livro) => livro.id !== id);

        alert("Livro deletado com sucesso!");
        this.$router.push("/home");
      } catch (error) {
        console.error(error);
      }
    },
  },
  async created() {
    if (this.$route.params.id) {
      this.mode = "editar";

      try {
        const response = await axios.get(
          `http://localhost:8000/livro/${this.$route.params.id}`
        );
        this.livro = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
};
</script>

<style>
.card-btn-edit {
  color: #000;
  background-color: #f5c518;
  border: 2px solid #f5c518;
  width: 100%;
  font-weight: bold;
}

.card-btn-edit:hover {
  background-color: transparent;
  border-color: #f5c518;
  font-weight: bold;
  color: #333;
}

.card-btn-delete {
  font-weight: bold;
  color: #000;
  background-color: #f51818;
  border: 2px solid #f51818;
  width: 100%;
}

.card-btn-delete:hover {
  background-color: transparent;
  border-color: #f5c518;
  font-weight: bold;
  color: #333;
}

input {
  font-size: 16px;
  font-weight: bold;
  color: #7c7979;
}

label {
  color: #333;
  font-weight: bold;
  font-size: 18px;
}
</style>
