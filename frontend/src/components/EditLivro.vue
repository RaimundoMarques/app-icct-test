<!-- LivroForm.vue -->
<template>
  <Navbar/>
  <div class="main-container">
    <h1 class="text-center">{{ mode === "adicionar" ? "Adicionar Livro" : "Editar Livro" }}</h1>
    <div class="col-lg-4 m-auto" id="register-container">
      <form @submit.prevent="submitForm">
        <div class="form-group mt-3">
          <label for="name">Nome</label>
          <input
            type="text"
            class="form-control"
            v-model="livro.nome"
            placeholder="Nome do livro"
          />
        </div>

        <div class="form-group mt-3">
          <label for="nameDoAutor">Nome do autor</label>
          <input
            type="text"
            class="form-control"
            v-model="livro.nomeDoAutor"
            placeholder="Autor do livro"
          />
        </div>

        <div class="form-group mt-3">
          <label for="lancamento">Ano de lançamento</label>
          <input
            type="text"
            class="form-control"
            v-model="livro.lancamento"
            placeholder="Ano de Lançamento"
          />
        </div>

        <div class="form-group mt-3">
          <label for="tipo">Tipo do livro</label>
          <input
            type="text"
            class="form-control"
            v-model="livro.tipo"
            placeholder="Digite o tipo do livro"
          />
        </div>

        <div class="form-group mt-3">
          <label for="genero">Gênero</label>
          <input
            type="text"
            class="form-control"
            v-model="livro.genero"
            placeholder="Gênero do livro"
          />
        </div>

        <div class="form-group mt-3">
          <label for="editora">Editora</label>
          <input
            type="text"
            class="form-control"
            v-model="livro.editora"
            placeholder="Qual a editora do Livro"
          />
        </div>

        <div class="form-group mt-3">
          <label for="anoEdicao">Anon de edição</label>
          <input
            type="text"
            class="form-control"
            v-model="livro.anoEdicao"
            placeholder="O ano da Edição do Livro"
          />
        </div>

        <div class="form-group mt-3">
          <label for="numEdicao">Nº da edição</label>
          <input
            type="text"
            class="form-control"
            v-model="livro.numEdicao"
            placeholder="Número da edição"
          />
        </div>
        <button type="submit" class="btn card-btn mt-4">
          {{ mode === "adicionar" ? "Adicionar" : "Editar" }}
        </button>
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
  name: "EditLivro",
  components:{
    Navbar, 
    Footer
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
      mode: "adicionar", // ou 'editar'
    };
  },
  methods: {
    async submitForm() {
      try {
        if (this.mode === "adicionar") {
          await axios.post("http://localhost:8000/livro", this.livro);
        } else {
          await axios.patch(
            `http://localhost:8000/livro/${this.livro.id}`,
            this.livro
          );
        }
        alert("Livro editado com sucesso!");
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

<style scoped>

.main-container{
  margin-bottom: 100px;
}

#register-container form {
  margin: 20px auto;
}

.card-btn {
  color: #000;
  background-color: #f5c518;
  border: 2px solid #f5c518;
  width: 100%;
}

.card-btn:hover {
  background-color: transparent;
  border-color: #f5c518;
  font-weight: bold;
  color: #333;
}

input{
  font-size: 16px;
  font-weight: bold;
  color: #7c7979;
}

label{
  color: #333;
  font-weight: bold;
  font-size: 18px;
}
</style>
