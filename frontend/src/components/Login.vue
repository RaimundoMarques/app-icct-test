<template>
  <div class="container">
    <h2 class="text-muted mb-5">Login</h2>
    <form @submit.prevent="login" class="form-control p-5 bg-dark">
      <!-- email input -->
      <div class="form-outline mb-4">
        <label class="form-label" id="labelEmail" for="formInput">Email</label>
        <input type="email" id="email" v-model="email" class="form-control" />
      </div>

      <!-- passwod input -->
      <label class="form-label" id="labelPassword" for="formInput">Senha</label>
      <div class="form-outline mb-4">
        <input
          type="password"
          id="password"
          v-model="password"
          class="form-control"
        />
      </div>

      <!-- 2 column grid layout for inline styling -->
      <div class="row mb-4">
        <div class="col d-flex justify-content-center"></div>
      </div>

      <!-- Submit button -->
      <button type="submit" class="btn btn-primary w-50 btn-block mb-4">
        Entrar
      </button>

      <!-- Register buttons -->
      <div class="text-center">
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
      </div>
    </form>
    <p v-if="error">{{ error }}</p>

    <div class="container-msg">
      <small>E-mail: admin@gmail.com</small>
      <small>Password: senha123</small>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("http://localhost:8000/login", {
          email: this.email,
          password: this.password,
        });

        alert(response.data.message);
        this.$router.push("/home");

      } catch (error) {

        this.error = error.response.data.message;
        //console.error("Erro de login:", error);
        alert(this.error);
        
        // this.email = ''
        // this.password = ''
        window.location.reload();
      }
    },
  },
};
</script>

<style scoped>
* {
  text-align: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  max-width: 500px;
  min-width: 400px;
  margin-top: 10vh;
}

.container-msg {
  margin-top: 10vh;
}

.container-msg small {
  margin-left: 10px;
}

label {
  position: relative;
  float: left;
  font-size: 18px;
}

.form-outline {
  width: 100%; /* Adicionar largura total ao formulário */
}
small{
  color: #333;
  font-weight: bold;
}
</style>
