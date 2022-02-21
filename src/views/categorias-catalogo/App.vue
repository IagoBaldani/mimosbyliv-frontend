<template>
  <div class="container-fluid">
    <Header page="login"/>
    <div class="container d-flex align-items-start">
        <div class="titulo"> Categorias </div>
        <div class="divisoria mt-2 mb-3"></div>
        <div class="item-area">
          <a class="item d-flex" href="/catalogo.html?categoria=maisVendidos">
              <img class="imagem" src="../../assets/logo.jpeg">
              <span class="mt-3"> Mais vendidos </span>
          </a>
          <a class="item d-flex"  href="/catalogo.html?categoria=roupas">
            <img class="imagem" src="../../assets/roupas.jpg">
            <span class="mt-3"> Roupas </span>
          </a>
          <a class="item d-flex"  href="/catalogo.html?categoria=prendedores">
            <img class="imagem" src="../../assets/prendedores.jpg">
            <span class="mt-3"> Prendedores </span>
          </a>
          <a class="item d-flex"  href="/catalogo.html?categoria=acessorios">
            <img class="imagem" src="../../assets/acessorios.jpg">
            <span class="mt-3"> Acessórios </span>
          </a>
        </div>
    </div>
  </div>
  <div class="footer d-flex justify-content-center align-items-center">
    <a href="https://portfolio-iagobaldani.vercel.app/">
      <img class="logoIb" src="../../assets/logoIB.png" alt="Logo IagoWebDeveloper" target="_blank">
    </a>
  </div>

</template>

<script>
import Header from "@/components/Header";
import {http} from "@/services/Config";

export default {
  name: 'App',
  components: {
    Header
  },
  data(){
    return{
      maisVendidos: [],
      roupas:[],
      prendedores: [],
      acessorios: []
    }
  },
  beforeMount() {
    this.getMaisVendidos()
    this.getRoupas()
    this.getPrendedores()
    this.getAcessorios()
  },
  methods: {
    async getMaisVendidos(){
       await http
          .get('produtos/mais-vendidos')
          .then(response => {
            this.maisVendidos = response.data
          })
          .catch(erro => {
            console.log(erro.response.data)
          })
    },
    async getRoupas(){
      await http
          .get('produtos/1')
          .then(response => {
            this.roupas = response.data
          })
          .catch(erro => {
            console.log(erro.response.data)
          })
    },
    async getPrendedores(){
      await http
          .get('produtos/2')
          .then(response => {
            this.prendedores = response.data
          })
          .catch(erro => {
            console.log(erro.response.data)
          })
    },
    async getAcessorios(){
      await http
          .get('produtos/3')
          .then(response => {
            this.acessorios = response.data
          })
          .catch(erro => {
            console.log(erro.response.data)
          })
    }
  }
}
</script>

<style>
body{
  background: url("../../assets/background.png") repeat;
}

.container{
  max-width: 1300px;
  margin: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  flex-direction: column;
  min-height: 84vh;
}

.item-area{
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
}

.titulo{
  margin-left: 10px;
  font-size: 2em;
  color: #78664C;
  font-weight: bold;
}

.divisoria{
  height: 5px;
  width: 150px;
  background-color: #78664C;
  margin-left: 10px;
}

.item{
  margin: 10px;
  background-color: #fff;
  width: 20vw;
  height: 40vh;
  text-align: center;
  border-radius: 10px;
  color: #D4C1A5;
  box-shadow: 0px 0px 5px #838483;
  transition: all linear 0.3s;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 22px;
  cursor: pointer;
}

.item:hover{
  color: #D4C1A5 !important;
  box-shadow: 0px 0px 15px #fff;
}

.imagem{
  height: 120px !important;
  border-radius: 20px;
}

.footer{
  background-color: #F0E3D8;
  width: 100%;
}

.logoIb{
  height: 30px;
  margin: 10px;
}

@media  (max-width: 1200px) {
  .container{
    max-width: 100vw;
    padding: 0;
  }

  .item-area{
    grid-template-columns: 1fr;
    width: 95vw;
  }

  .item{
    width: 90vw;
    margin: auto auto 20px auto;
  }

}

</style>
