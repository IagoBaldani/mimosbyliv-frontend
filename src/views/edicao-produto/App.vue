<template>
  <div class="container-fluid">
    <Header page="cadastro-edicao" tipo-pagina="edicao" :id="produto.id"/>
    <div class="row justify-content-evenly mt-3">
      <div class="col-xl-4">
        <div class="mb-3">
          <label class="form-label fw-bold mb-0 titulo">Preço</label>
          <input class="form-control" id="preco" type="number" :value="produto.preco">
        </div>

        <div class="mb-3">
          <label class="form-label fw-bold mb-0 titulo">Categoria</label>
          <select class="form-select" id="categoria"  @change="alteraVisibilidadeCheckbox">
            <option value="roupas" id="optRoupas">Roupas</option>
            <option value="prendedores" id="optPrendedores">Prendedores</option>
            <option value="acessorios" id="optAcessorios">Acessórios</option>
          </select>
        </div>

        <div class="mb-3" id="tamanhosDiv">
          <label class="form-label fw-bold mb-0 me-3 titulo">Tamanhos</label>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" value="P" id="checkPequeno" :checked="verificaTamanhos('P')">
            <label class="form-check-label fw-bold titulo"> P </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" value="M" id="checkMedio" :checked="verificaTamanhos('M')">
            <label class="form-check-label fw-bold titulo"> M </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" value="G" id="checkGrande" :checked="verificaTamanhos('G')">
            <label class="form-check-label fw-bold titulo"> G </label>
          </div>
        </div>

        <div class="mb-3">
          <label class="form-label fw-bold mb-0 titulo">Link da imagem</label>
          <input class="form-control" id="urlDaImagem" type="url" :value="produto.urlImagem">
        </div>

        <div class="mb-3 form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="maisVendidos" :checked="isChecked()">
          <label class="form-check-label fw-bold titulo">Mais vendidos</label>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="mb-3">
          <label class="form-label fw-bold mb-0 titulo">Descrição</label>
          <textarea id="descricao" class="form-control" :value="produto.descricao" placeholder="Descrição..." cols="20" rows="6" style="resize:none;"></textarea>
        </div>
      </div>
      <div class="col-xl-2"></div>
    </div>
    <div class="row justify-content-evenly">
      <div class="col-xl-4">
        <button @click="submit(produto.id)" type="button" class="btn submit form-control">
          CONFIRMAR
        </button>
      </div>
      <div class="col-xl-4">
        <button v-if="produto.status == 'Disponível'" @click="mudarStatus(produto.id)" type="button" class="btn submit form-control esgotado">
          MARCAR COMO ESGOTADO
        </button>
        <button v-else @click="mudarStatus(produto.id)" type="button" class="btn submit form-control disponivel">
          MARCAR COMO DISPONÍVEL
        </button>
      </div>
      <div class="col-xl-2"></div>
    </div>
  </div>

</template>

<script>
import Header from "@/components/Header";
import Cookie from "js-cookie";
import axios from "axios";
import Funcoes from "@/services/Funcoes";
import {http} from "@/services/Config";

export default {
  name: 'App',
  components: {
    Header
  },
  data(){
    return{
      id:'',
      produto:{
        id:'',
        nome:''
      },
      produtoForm:{
        preco:'',
        categoria: '',
        tamanhos:'',
        urlDaImagem:'',
        maisVendidos: '',
        descricao: ''
      }
    }
  },
  beforeMount() {
    Funcoes.verificaToken()
    const dadosUrl = Funcoes.pegaDadosUrl()

    this.getProduto(dadosUrl.id)
  },
  mounted() {
    this.selecionaOption()
  },
  methods: {
    pegaDados(){
      this.produtoForm.preco = document.getElementById('preco').value
      this.produtoForm.categoria = document.getElementById('categoria').value
      this.produtoForm.tamanhos = this.concatenaTamanhos()
      this.produtoForm.urlDaImagem = document.getElementById('urlDaImagem').value
      this.produtoForm.maisVendidos = this.formataMaisVendidos()
      this.produtoForm.descricao = document.getElementById('descricao').value
    },
    async getProduto(id){

      await http.get(`${id}`)
          .then(response => {
            this.produto = response.data
          })
          .catch(erro => {
            alert(erro.response.data)
          })
    },

    async submit(id){
      this.pegaDados()

      await http.put(`${id}`, this.produtoForm)
          .then(response => {
            alert("Produto editado com sucesso!")
            window.location.href = 'http://localhost:8080/catalogo-admin'
          })
          .catch(erro => {
            alert(erro.response.data)
          })
    },

    async mudarStatus(id){
      await http.put(`status/${id}`)
          .then(response => {
            alert("Status editado com sucesso!")
            window.location.reload()
          })
          .catch(erro => {
            alert(erro.response.data)
          })
    },

    verificaTamanhos(tamanho){
      if(this.produto.tamanhos !== '' || this.produto.tamanhos !== undefined) {
        const tamanhosProduto = this.produto.tamanhos
        const tamanhosProdutoArray = tamanhosProduto.split(' ')

        for (let i = 0; i < tamanhosProdutoArray.length; i++) {
          if (tamanho === tamanhosProdutoArray[i]) {
            return true
          }
        }
      }
    },

    concatenaTamanhos(){
      let tamanhos = ''
      let checkPequeno = document.getElementById('checkPequeno');
      let checkMedio = document.getElementById('checkMedio');
      let checkGrande = document.getElementById('checkGrande');

      if(checkPequeno.checked){
        tamanhos += 'P '
      }
      if(checkMedio.checked){
        tamanhos += 'M '
      }
      if(checkGrande.checked){
        tamanhos += 'G'
      }

      if(tamanhos.length === 2 || tamanhos.length === 4){
        return tamanhos.trimEnd()
      }
      else{
        return tamanhos
      }
    },

    alteraVisibilidadeCheckbox(){
      const selectCategoriaElement = document.getElementById('categoria')
      const tamanhosDivElement = document.getElementById('tamanhosDiv')

      if(selectCategoriaElement.value !== 'roupas'){
        tamanhosDivElement.style.display = 'none'
        this.produtoForm.tamanhos = ''
      }
      else{
        tamanhosDivElement.style.display = 'block'
      }
    },

    formataMaisVendidos(){
      let maisVendidos = document.getElementById('maisVendidos')

      if(maisVendidos.checked){
        return 'S'
      }
      else{
        return 'N'
      }
    },

    isChecked(){
      return this.produto.maisVendidos === 'S';
    },

    selecionaOption(){
      switch (this.produto.categoria.nome){
        case 'roupas':
          document.getElementById("optRoupas").setAttribute('selected', '')
          break
        case 'prendedores':
          document.getElementById("optPrendedores").setAttribute('selected', '')
          break
        case 'acessorios':
          document.getElementById("optAcessorios").setAttribute('selected', '')
          break
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

.submit:hover{
  box-shadow: 0px 0px 10px #838483;
}

.submit:focus{
  background-color: #78664C;
}

.esgotado{
  background-color: #9E2222;
}

.disponivel{
  background-color: #3AD037;
}

@media (max-width: 1200px) {
  .disponivel, .esgotado{
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
}
</style>
