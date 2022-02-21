<template>
  <div class="containercustom d-flex">
    <div class="logo">
      <img class="logo" src="../assets/logo.jpeg">
    </div>

    <a v-if="page === 'home'" href="/login.html">
      <div class="botao d-flex justify-content-evenly">
        <img class="imgBotao" src="../assets/settings_white_24dp.svg">
        <p>GERENCIAR</p>
      </div>
    </a>

    <a v-if="page === 'login'" href="javascript:history.back()">
      <div class="botao d-flex justify-content-evenly">
        <img class="imgBotao" src="../assets/arrow_back_white_24dp.svg">
        <p>VOLTAR</p>
      </div>
    </a>

    <div v-if="page === 'catalogo-admin'" class="botoes d-flex">
      <a  href="/cadastro-produto.html">
        <div class="botao d-flex justify-content-evenly">
          <img class="imgBotao" src="../assets/add_white_24dp.svg">
          <p>ADICIONAR</p>
        </div>
      </a>
      <a  href="/login.html">
        <div class="botao d-flex justify-content-evenly">
          <img class="imgBotao" src="../assets/arrow_back_white_24dp.svg">
          <p>SAIR</p>
        </div>
      </a>
    </div>

    <div v-if="page === 'cadastro-edicao'" class="botoes d-flex">
      <div class="botao excluir d-flex justify-content-evenly" v-if="tipoPagina === 'edicao'" @click="excluir(id)">
        <img class="imgBotao" src="../assets/delete_white_24dp.svg">
        <p>EXCLUIR</p>
      </div>
      <a href="/catalogo-admin.html">
        <div class="botao d-flex justify-content-evenly">
          <img class="imgBotao" src="../assets/arrow_back_white_24dp.svg">
          <p>VOLTAR</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>

import {http} from "@/services/Config";

export default {
  name: 'Header',
  props: {
    page: String,
    tipoPagina: String,
    id: Number
  },
  data(){
    return{
    }
  },
  methods: {
    async excluir(id){
      await http.delete(`${id}`)
        .then(response =>{
          alert("Produto excluído com sucesso!")
          window.location.href = 'https://mimosbyliv.vercel.app/catalogo-admin.html'
        })
        .catch(erro =>{
          alert("Erro na exclusão: " + erro.response.data)
        })
    }

  }
}
</script>

<style scoped>
.containercustom{
  padding: 10px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.logo{
  height: 12vh;
  border-radius: 6vh;
}

.botao{
  height: 12vh;
  min-width: 8vw;
  background-color: #fff;
  border-radius: 8px;
  align-items: center;
  flex-direction: column;
  color: #D4C1A5;
  padding: 0.5em;
  font-size: 0.6em;
  box-shadow: 0px 0px 2px #838483;
  transition: all linear 0.2s;
  cursor: pointer;
}

.excluir{
  background-color: #9E2222;
}

.botao:nth-child(1){
  margin-left: 10px;
}


.botao:hover{
  box-shadow: 0px 0px 10px #fff;
}

p{
  margin-bottom: 0 !important;
}

@media (max-width: 1200px) {
  .botao{
    width: 20vw;
  }
}

</style>
