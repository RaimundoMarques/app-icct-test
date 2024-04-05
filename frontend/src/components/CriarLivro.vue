<template>
  <Navbar />
  <div class="main-container">
    <h1 class="text-center">Cadastrar livro</h1>

    <div class="col-lg-4 m-auto" id="register-container">
      <!-- CADASTRAR UM LIVRO -->
      <form @submit.prevent="create">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="livro.nome"
            placeholder="Nome do livro"
          />
        </div>

        <div class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="livro.nomeDoAutor"
            placeholder="Autor do Livro"
          />
        </div>

        <div class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="livro.lancamento"
            placeholder="Ano de Lançamento"
          />
        </div>

        <div class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="livro.tipo"
            placeholder="Digite o tipo do livro"
          />
        </div>

        <div class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="livro.genero"
            placeholder="Gênero do livro"
          />
        </div>

        <div class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="livro.editora"
            placeholder="Qual a editora do Livro"
          />
        </div>

        <div class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="livro.anoEdicao"
            placeholder="O ano da Edição do Livro"
          />
        </div>

        <div class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="livro.numEdicao"
            placeholder="Número da edição"
          />
        </div>

        <input type="submit" class="btn card-btn mt-4" value="Registrar" />
      </form>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Livros from "../services/livros";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";


export default {
  name: "CriarLivro",
  components:{
    Navbar,
    Footer
  },
  data() {
    return {
      livro: {
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
    create() {
      Livros.create(this.livro)
        .then(() => {
          // Limpar os campos após o cadastro
          this.livro = {
            nome: "",
            nomeDoAutor: "",
            lancamento: "",
            tipo: "",
            genero: "",
            editora: "",
            anoEdicao: "",
            numEdicao: "",
          };
          // this.$toasted.success("Livro cadastrado com sucesso!");
          alert("Livro cadastrado com sucesso!")
          // Redirecionar para a página Home após o cadastro
          this.$router.push("/home");
        })
        .catch((error) => {
          // this.$toasted.error(
          //   "Erro ao cadastrar livro. Por favor, tente novamente."
          // );
          alert("Erro ao cadastrar livro. Por favor, tente novamente.")
          window.location.reload();
        });
    },
  },
};
</script>

<style>

.main-container{
  margin-top: 10vh;
}

.form-group {
  margin-top: 15px;
}

#register-container form {
  margin: 30px auto;
}

.card-btn {
  color: #000;
  background-color: #f5c518;
  border: 2px solid #f5c518;
  width: 100%;
}

.card-btn:hover {
  background-color: transparent;
  color: #f5c518;
  border-color: #f5c518;
}
</style>
