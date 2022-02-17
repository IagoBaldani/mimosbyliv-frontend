<template>
  <div class="container-fluid">
    <Header page="login"/>
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-lg-6">
        <div class="painel">
          <form @submit.stop.prevent="submit">
            <div class="form-floating">
              <input v-model="nome" class="form-control mt-2">
              <label>Login</label>
            </div>
            <div class="form-floating">
              <input v-model="senha" type="password" class="form-control mt-3">
              <label>Senha</label>
            </div>
            <input type="submit" class="form-control botaoSubmit mt-5" value="ENTRAR">
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Header from "@/components/Header";
import Cookie from "js-cookie";
import axios from "axios";

export default {
  name: 'App',
  components: {
    Header
  },
  data(){
    return{
      nome: '',
      senha: '',
      responseStatus: ''
    }
  },
  beforeMount() {
    Cookie.remove('api_token')
  },
  methods: {
    async submit(){
      axios.post('http://localhost:8081/api/auth', {
        nome: this.nome,
        senha: this.senha
      })
          .then(response => {
            Cookie.set('api_token', response.data.token)
            window.location.href = 'http://localhost:8080/catalogo-admin'
          })
          .catch(erro => {
            alert('Dados incorretos. Por favor, tente novamente.')
          })
    }
  }
}
</script>

<style>
body{
  background-color: #EAD5C3;
}

.painel{
  height: 70vh;
}

.botaoSubmit{
  background-color: #D4C1A5 !important;
  font-weight: bold;
  color: #FFFFFF !important;
  transition: all linear 0.3s;
  border: none;
}

.botaoSubmit:hover{
  box-shadow: 0px 0px 10px #838483;
}

</style>
