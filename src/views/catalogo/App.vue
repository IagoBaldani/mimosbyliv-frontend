<template>
  <div class="container-fluid">
    <Header page="catalogo"/>
    <div class="container d-flex justify-content-center align-items-start">
      <div>
        <div class="titulo">
          <span v-if="categoriaDesc === 'maisVendidos'"> Mais vendidos </span>
          <span v-else-if="categoriaDesc === 'roupas'"> Roupas </span>
          <span v-else-if="categoriaDesc === 'prendedores'"> Prendedores </span>
          <span v-else-if="categoriaDesc === 'acessorios'"> Acessorios </span>
        </div>
        <div class="divisoria mt-2 mb-3"></div>
        <div v-if="produtos.length > 0" class="item-area">
          <div class="item d-flex" v-for="produto in produtos" v-bind:key="produto">
            <div class="item-img">
              <img class="imagem" :src="produto.urlImagem">
            </div>
            <div class="item-text">
              <div class="upper-item-text d-flex">
                <span class="preco">R$ {{ produto.preco }}</span>
                <span class="status" v-bind:class="produto.status === 'Disponível' ? 'disponivel' : 'esgotado'">
                  {{ produto.status.toUpperCase() }}
                </span>
              </div>
              <div class="mid-item-text d-flex">
                <span class="tamanho">{{ produto.tamanhos }}</span>
              </div>
              <div class="lower-item-text d-flex">
                <span class="descricao"> {{ produto.descricao }} </span>
              </div>
<!--              <a href="" v-if="produto.status === 'Disponível'">-->
<!--                <div class="btnEditar d-flex justify-content-center align-items-center mt-2">-->
<!--                  ADICIONAR AO CARRINHO-->
<!--                </div>-->
<!--              </a>-->
            </div>
          </div>
        </div>
        <div  class="semProdutos d-flex ">
          Carregando produtos, aguarde um instante.
          <div class="spinner-border mt-3" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
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
import Funcoes from "@/services/Funcoes";
import Cookie from "js-cookie";

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      categoriaDesc: '',
      produtos: []
    }
  },
  async beforeMount() {
    const dadosUrl = Funcoes.pegaDadosUrl()

    this.categoriaDesc = dadosUrl.categoria

    switch (this.categoriaDesc) {
      case 'maisVendidos':
        await this.getMaisVendidos();
        break
      case 'roupas':
        await this.getRoupas();
        break
      case 'prendedores':
        await this.getPrendedores();
        break
      case 'acessorios':
        await this.getAcessorios();
        break
    }
  },
  methods: {
    async getMaisVendidos() {
      await http
          .get('produtos/mais-vendidos')
          .then(response => {
            this.produtos = response.data
          })
          .catch(erro => {
            console.log(erro.response.data)
          })
    },
    async getRoupas() {
      await http
          .get('produtos/1')
          .then(response => {
            this.produtos = response.data
          })
          .catch(erro => {
            console.log(erro.response.data)
          })
    },
    async getPrendedores() {
      await http
          .get('produtos/2')
          .then(response => {
            this.produtos = response.data
          })
          .catch(erro => {
            console.log(erro.response.data)
          })
    },
    async getAcessorios() {
      await http
          .get('produtos/3')
          .then(response => {
            this.produtos = response.data
          })
          .catch(erro => {
            console.log(erro.response.data)
          })
    }
  }
}
</script>

<style>
body {
  background: url("../../assets/background.png") repeat;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  flex-direction: column;
}

.item-area {
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.titulo {
  margin-left: 10px;
  font-size: 2em;
  color: #78664C;
  font-weight: bold;
}

.divisoria {
  height: 5px;
  width: 150px;
  background-color: #78664C;
  margin-left: 10px;
}

.semProdutos {
  padding: 1.5em;
  font-size: 20px;
  margin-left: 10px;
  align-items: center;
  flex-direction: column;
  color: #78664C;
  background-color: #FDF4F5;
  border-radius: 10px;
  font-weight: 600;
  box-shadow: 0px 0px 5px #78664C;
}

.item {
  margin: 10px;
  background-color: #fff;
  width: 35vw;
  text-align: center;
  border-radius: 10px;
  color: #D4C1A5;
  box-shadow: 0 0 10px #bab5b5;
}

.item-img {
  height: 100%;
}

.imagem {
  height: 40vh;
  border-radius: 10px;
}

.item-text {
  width: 100%;
  border-radius: 0px 10px 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
}

.upper-item-text, .lower-item-text, .mid-item-text {
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
}

.upper-item-text, .mid-item-text {
  font-weight: bold;
}

.preco, .tamanho {
  font-size: 1.5em;
}

.status, .descricao {
  font-size: 0.8em;
}

.disponivel {
  color: #3AD037;
}

.esgotado {
  color: #9E2222;
}

.footer {
  background-color: #F0E3D8;
  width: 100%;
}

.logoIb {
  height: 30px;
  margin: 10px;
}

.btnEditar {
  padding: 5px;
  background-color: #DBAD69;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  width: 70%;
  box-shadow: 0px 0px 2px #838483;
  transition: all linear 0.2s;
}


@media (max-width: 1200px) {
  .container {
    max-width: 100vw;
    padding: 0;
  }

  .item-area {
    grid-template-columns: 1fr;
    width: 95vw;
  }

  .item {
    width: 100%;
    margin: 0px 0px 10px 0px;
  }

  .imagem {
    height: 28vh;
  }

  .preco, .tamanho {
    font-size: 1.2em;
  }

  .status, .descricao {
    font-size: 0.8em;
  }
}

</style>
