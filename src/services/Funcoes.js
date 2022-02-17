import Cookie from 'js-cookie'
import {http} from "@/services/Config";

export default {
  async verificaToken () {
    const token = Cookie.get('api_token')

    await http.get(`auth/${token}`)
      .then(response => {
        this.responseStatus = response.data
      })

      if(this.responseStatus == 'ERRO'){
        window.location.href = 'http://localhost:8080/login'
      }
  },

  pegaDadosUrl () {
    var query = location.search.slice(1)
    var partes = query.split('&')
    var data = {}

    partes.forEach(function (parte) {
      var chaveValor = parte.split('=')
      var chave = chaveValor[0]
      var valor = chaveValor[1]
      data[chave] = valor
    })

    return data
  }
}
