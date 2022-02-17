<template>
  <div class="container-fluid">
    <Header page="login"/>
    <div class="container d-flex justify-content-center align-items-start">
      <div>
        <div class="titulo"> Mais vendidos </div>
        <div class="divisoria mt-2 mb-3"></div>
        <div v-if="maisVendidos.length > 0" class="item-area">
          <div class="item d-flex" v-for="maisVendido in maisVendidos" v-bind:key="maisVendido">
            <div class="item-img">
              <img class="imagem" :src="maisVendido.urlImagem">
            </div>
            <div class="item-text">
              <div class="upper-item-text d-flex">
                <span class="preco">R$ {{maisVendido.preco}}</span>
                <span class="status" v-bind:class="maisVendido.status == 'Disponível' ? 'disponivel' : 'esgotado'">
                  {{maisVendido.status.toUpperCase()}}
                </span>
              </div>
              <div class="mid-item-text d-flex">
                <span class="tamanho">{{maisVendido.tamanhos}}</span>
              </div>
              <div class="lower-item-text d-flex">
                <span class="descricao"> {{ maisVendido.descricao }} </span>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="semProdutos d-flex">
          Ops, ainda não há nenhum produto nesta categoria!
        </div>
      </div>
      <div>
        <div class="titulo"> Roupas </div>
        <div class="divisoria mt-2 mb-3"></div>
        <div v-if="roupas.length > 0" class="item-area">
          <div class="item d-flex" v-for="roupa in roupas" v-bind:key="roupa">
            <div class="item-img">
              <img class="imagem" :src="roupa.urlImagem">
            </div>
            <div class="item-text">
              <div class="upper-item-text d-flex">
                <span class="preco">R$ {{roupa.preco}}</span>
                <span class="status" v-bind:class="roupa.status == 'Disponível' ? 'disponivel' : 'esgotado'">
                  {{roupa.status.toUpperCase()}}
                </span>
              </div>
              <div class="mid-item-text d-flex">
                <span class="tamanho">{{roupa.tamanhos}}</span>
              </div>
              <div class="lower-item-text d-flex">
                <span class="descricao"> {{ roupa.descricao }} </span>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="semProdutos d-flex">
          Ops, ainda não há nenhum produto nesta categoria!
        </div>
      </div>
      <div>
        <div class="titulo"> Prendedores </div>
        <div class="divisoria mt-2 mb-3"></div>
        <div v-if="prendedores.length > 0" class="item-area">
          <div class="item d-flex" v-for="prendedor in prendedores" v-bind:key="prendedor">
            <div class="item-img">
              <img class="imagem" :src="prendedor.urlImagem">
            </div>
            <div class="item-text">
              <div class="upper-item-text d-flex">
                <span class="preco">R$ {{prendedor.preco}}</span>
                <span class="status" v-bind:class="prendedor.status == 'Disponível' ? 'disponivel' : 'esgotado'">
                  {{prendedor.status.toUpperCase()}}
                </span>
              </div>
              <div class="mid-item-text d-flex">
                <span class="tamanho">{{prendedor.tamanhos}}</span>
              </div>
              <div class="lower-item-text d-flex">
                <span class="descricao"> {{ prendedor.descricao }} </span>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="semProdutos d-flex">
          Ops, ainda não há nenhum produto nesta categoria!
        </div>
      </div>
      <div>
        <div class="titulo"> Acessórios </div>
        <div class="divisoria mt-2 mb-3"></div>
        <div v-if="acessorios.length > 0" class="item-area">
          <div class="item d-flex" v-for="acessorio in acessorios" v-bind:key="acessorio">
            <div class="item-img">
              <img class="imagem" :src="acessorio.urlImagem">
            </div>
            <div class="item-text">
              <div class="upper-item-text d-flex">
                <span class="preco">R$ {{acessorio.preco}}</span>
                <span class="status" v-bind:class="acessorio.status == 'Disponível' ? 'disponivel' : 'esgotado'">
                  {{acessorio.status.toUpperCase()}}
                </span>
              </div>
              <div class="mid-item-text d-flex">
                <span class="tamanho">{{acessorio.tamanhos}}</span>
              </div>
              <div class="lower-item-text d-flex">
                <span class="descricao"> {{ acessorio.descricao }} </span>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="semProdutos d-flex">
          Ops, ainda não há nenhum produto nesta categoria!
        </div>
      </div>
    </div>
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
  max-width: 1200px;
  margin: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  flex-direction: column;
}

.item-area{
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
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

.semProdutos{
  padding: 1.5em;
  font-size: 20px;
  margin-left: 10px;
  align-items: center;
  color: #78664C;
  background-color: #FDF4F5;
  border-radius: 10px;
  font-weight: 600;
  box-shadow: 0px 0px 5px #78664C;
}

.item{
  margin: 10px;
  background-color: #fff;
  width: 35vw;
  text-align: center;
  border-radius: 10px;
  color: #D4C1A5;
  box-shadow: 0 0 10px #bab5b5;
}

.item-img{
  height: 100%;
}

.imagem{
  height: 40vh;
  border-radius: 10px;
}

.item-text{
  width: 100%;
  border-radius: 0px 10px 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
}

.upper-item-text, .lower-item-text, .mid-item-text{
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
}

.upper-item-text, .mid-item-text{
  font-weight: bold;
}

.preco, .tamanho{
  font-size: 1.5em;
}

.status, .descricao{
  font-size: 0.8em;
}

.disponivel{
  color: #3AD037;
}

.esgotado{
  color: #9E2222;
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
    width: 100%;
    margin: 0px 0px 10px 0px;
  }

  .imagem{
    height: 28vh;
  }

  .preco, .tamanho{
    font-size: 1.2em;
  }

  .status, .descricao{
    font-size: 0.8em;
  }
}

</style>
