<template>
  <div class="container-fluid">
    <Header page="cadastro-edicao" :tipo-pagina="this.tipoPagina"/>
    <div class="row justify-content-evenly mt-3">
      <div class="col-xl-4">
        <div class="mb-3">
          <label class="form-label fw-bold mb-0 titulo">Preço</label>
          <input class="form-control" v-model="modelPreco" type="number">
        </div>

        <div class="mb-3">
          <label class="form-label fw-bold mb-0 titulo">Categoria</label>
          <select class="form-select" id="selectCategoria" v-model="modelCategoria" @change="alteraVisibilidadeCheckbox">
            <option value="roupas">Roupas</option>
            <option value="prendedores">Prendedores</option>
            <option value="acessorios">Acessórios</option>
          </select>
        </div>

        <div class="mb-3" id="tamanhosDiv">
          <label class="form-label fw-bold mb-0 me-3 titulo">Tamanhos</label>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="checkPequeno">
            <label class="form-check-label fw-bold titulo"> P </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="checkMedio">
            <label class="form-check-label fw-bold titulo"> M </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="checkGrande">
            <label class="form-check-label fw-bold titulo"> G </label>
          </div>
        </div>

        <div class="mb-3">
          <label class="form-label fw-bold mb-0 titulo">Link da imagem</label>
          <input class="form-control" v-model="modelUrlImagem" type="url">
        </div>

        <div class="mb-3 form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" v-model="modelMaisVendidos">
          <label class="form-check-label fw-bold titulo">Mais vendidos</label>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="mb-3">
          <label class="form-label fw-bold mb-0 titulo">Descrição</label>
          <textarea v-model="modelDescricao" class="form-control" placeholder="Descrição..." cols="20" rows="6" style="resize:none;"></textarea>
        </div>
      </div>
      <div class="col-xl-2"></div>
    </div>
    <div class="row justify-content-evenly">
      <div class="col-xl-4">
        <button @click="postProduto" type="button" class="btn submit form-control">
          CONFIRMAR
        </button>
      </div>
      <div class="col-xl-4"></div>
      <div class="col-xl-2"></div>
    </div>
  </div>

</template>

<script>
import Header from "@/components/Header";
import {http} from "@/services/Config";
import Funcoes from "@/services/Funcoes";

export default {
  name: 'App',
  components: {
    Header
  },
  data(){
    return{
      produtoForm:{
        preco:'',
        categoria: 0,
        tamanho:'',
        urlDaImagem:'',
        maisVendidos: '',
        descricao: ''
      }
    }
  },
  beforeMount() {
    Funcoes.verificaToken()
  },
  methods: {
    pegaDados(){
      this.produtoForm.preco = this.modelPreco
      this.produtoForm.categoria = this.modelCategoria
      this.produtoForm.tamanho = this.concatenaTamanhos()
      this.produtoForm.urlDaImagem = this.modelUrlImagem
      this.produtoForm.maisVendidos = this.formataMaisVendidos()
      this.produtoForm.descricao = this.modelDescricao
    },
    async postProduto(){
      this.pegaDados()

      await http.post(' ', this.produtoForm)
          .then(response => {
            alert("Produto cadastrado com sucesso!")
            window.location.href = 'https://mimosbyliv.vercel.app/catalogo-admin.html'
          })
          .catch(erro => {
            alert(erro.response.data)
          })
    },

    concatenaTamanhos(){
      let tamanhos = ''

      if(this.checkPequeno){
        tamanhos += 'P '
      }
      if(this.checkMedio){
        tamanhos += 'M '
      }
      if(this.checkGrande){
        tamanhos += 'G'
      }

      if(tamanhos.length === 2 || tamanhos.length === 4){
        return tamanhos.trimEnd()
      }
      else{
        return tamanhos
      }
    },

    formataMaisVendidos(){
      if(this.modelMaisVendidos){
        return 'S'
      }
      return 'N'
    },

    alteraVisibilidadeCheckbox(){
      const selectCategoriaElement = document.getElementById('selectCategoria')
      const tamanhosDivElement = document.getElementById('tamanhosDiv')

      if(selectCategoriaElement.value !== 'roupas'){
        tamanhosDivElement.style.display = 'none'
      }
      else{
        tamanhosDivElement.style.display = 'block'
      }
    }
  }
}
</script>

<style>
body{
  background: url("../../assets/background.png") repeat;
}

.titulo, .form-select, .form-control{
  color: #78664C !important;
}

.submit{
  background-color: #78664C;
  color: #fff !important;
  font-weight: bold;
  transition: all 0.2s linear;
}

.submit:focus{
  outline: none;
  background-color: #78664C !important;
}

.submit:hover{
  box-shadow: 0px 0px 10px #838483;
}
</style>
