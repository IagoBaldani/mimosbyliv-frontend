(function(e){function t(t){for(var c,r,i=t[0],s=t[1],l=t[2],d=0,b=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&b.push(a[r][0]),a[r]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);u&&u(t);while(b.length)b.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],c=!0,i=1;i<o.length;i++){var s=o[i];0!==a[s]&&(c=!1)}c&&(n.splice(t--,1),e=r(r.s=o[0]))}return e}var c={},a={"edicao-produto":0},n=[];function r(t){if(c[t])return c[t].exports;var o=c[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=c,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(o,c,function(t){return e[t]}.bind(null,c));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;n.push([4,"chunk-vendors"]),o()})({"0418":function(e,t,o){"use strict";var c=o("7a23"),a=o("43f2"),n=o.n(a),r=o("1754"),i=o.n(r),s=o("eae2"),l=o.n(s),u=o("09bd"),d=o.n(u),b=o("c404"),p=o.n(b),f=function(e){return Object(c["k"])("data-v-1b61aec9"),e=e(),Object(c["j"])(),e},m={class:"containercustom d-flex"},h=f((function(){return Object(c["e"])("div",{class:"logo"},[Object(c["e"])("img",{class:"logo",src:n.a})],-1)})),v={key:0,href:"/login"},O=f((function(){return Object(c["e"])("div",{class:"botao d-flex justify-content-evenly"},[Object(c["e"])("img",{class:"imgBotao",src:i.a}),Object(c["e"])("p",null,"GERENCIAR")],-1)})),g=[O],j={key:1,href:"/home"},k=f((function(){return Object(c["e"])("div",{class:"botao d-flex justify-content-evenly"},[Object(c["e"])("img",{class:"imgBotao",src:l.a}),Object(c["e"])("p",null,"VOLTAR")],-1)})),y=[k],w={key:2,class:"botoes d-flex"},x=Object(c["f"])('<a href="/cadastro-produto" data-v-1b61aec9><div class="botao d-flex justify-content-evenly" data-v-1b61aec9><img class="imgBotao" src="'+d.a+'" data-v-1b61aec9><p data-v-1b61aec9>ADICIONAR</p></div></a><a href="/login" data-v-1b61aec9><div class="botao d-flex justify-content-evenly" data-v-1b61aec9><img class="imgBotao" src="'+l.a+'" data-v-1b61aec9><p data-v-1b61aec9>SAIR</p></div></a>',2),R=[x],I={key:3,class:"botoes d-flex"},P=f((function(){return Object(c["e"])("img",{class:"imgBotao",src:p.a},null,-1)})),E=f((function(){return Object(c["e"])("p",null,"EXCLUIR",-1)})),A=[P,E],B=f((function(){return Object(c["e"])("a",{href:"/catalogo-admin"},[Object(c["e"])("div",{class:"botao d-flex justify-content-evenly"},[Object(c["e"])("img",{class:"imgBotao",src:l.a}),Object(c["e"])("p",null,"VOLTAR")])],-1)}));function C(e,t,o,a,n,r){return Object(c["i"])(),Object(c["d"])("div",m,[h,"home"===o.page?(Object(c["i"])(),Object(c["d"])("a",v,g)):Object(c["c"])("",!0),"login"===o.page?(Object(c["i"])(),Object(c["d"])("a",j,y)):Object(c["c"])("",!0),"catalogo-admin"===o.page?(Object(c["i"])(),Object(c["d"])("div",w,R)):Object(c["c"])("",!0),"cadastro-edicao"===o.page?(Object(c["i"])(),Object(c["d"])("div",I,["edicao"===o.tipoPagina?(Object(c["i"])(),Object(c["d"])("div",{key:0,class:"botao excluir d-flex justify-content-evenly",onClick:t[0]||(t[0]=function(e){return r.excluir(o.id)})},A)):Object(c["c"])("",!0),B])):Object(c["c"])("",!0)])}var M=o("1da1"),_=(o("96cf"),o("a9e3"),o("6de1")),S={name:"Header",props:{page:String,tipoPagina:String,id:Number},data:function(){return{}},methods:{excluir:function(e){return Object(M["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_["a"].delete("".concat(e)).then((function(e){alert("Produto excluído com sucesso!"),window.location.href="http://localhost:8080/catalogo-admin"})).catch((function(e){alert("Erro na exclusão: "+e.response.data)}));case 2:case"end":return t.stop()}}),t)})))()}}},D=(o("b34e"),o("6b0d")),T=o.n(D);const V=T()(S,[["render",C],["__scopeId","data-v-1b61aec9"]]);t["a"]=V},"09bd":function(e,t,o){e.exports=o.p+"img/add_white_24dp.73fa973c.svg"},1754:function(e,t,o){e.exports=o.p+"img/settings_white_24dp.b3998d4f.svg"},"181d":function(e,t,o){"use strict";var c=o("1da1"),a=(o("fb6a"),o("ac1f"),o("841c"),o("1276"),o("d3b7"),o("159b"),o("96cf"),o("852e")),n=o.n(a),r=o("6de1");t["a"]={verificaToken:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=n.a.get("api_token"),t.next=3,r["a"].get("auth/".concat(o)).then((function(t){e.responseStatus=t.data}));case 3:"ERRO"==e.responseStatus&&(window.location.href="http://localhost:8080/login");case 4:case"end":return t.stop()}}),t)})))()},pegaDadosUrl:function(){var e=location.search.slice(1),t=e.split("&"),o={};return t.forEach((function(e){var t=e.split("="),c=t[0],a=t[1];o[c]=a})),o}}},4:function(e,t,o){e.exports=o("534b")},"43f2":function(e,t,o){e.exports=o.p+"img/logo.0d5bec85.jpeg"},"534b":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var c=o("7a23"),a={class:"container-fluid"},n={class:"row justify-content-evenly mt-3"},r={class:"col-xl-4"},i={class:"mb-3"},s=Object(c["e"])("label",{class:"form-label fw-bold mb-0 titulo"},"Preço",-1),l=["value"],u={class:"mb-3"},d=Object(c["e"])("label",{class:"form-label fw-bold mb-0 titulo"},"Categoria",-1),b=Object(c["e"])("option",{value:"roupas",id:"optRoupas"},"Roupas",-1),p=Object(c["e"])("option",{value:"prendedores",id:"optPrendedores"},"Prendedores",-1),f=Object(c["e"])("option",{value:"acessorios",id:"optAcessorios"},"Acessórios",-1),m=[b,p,f],h={class:"mb-3",id:"tamanhosDiv"},v=Object(c["e"])("label",{class:"form-label fw-bold mb-0 me-3 titulo"},"Tamanhos",-1),O={class:"form-check form-check-inline"},g=["checked"],j=Object(c["e"])("label",{class:"form-check-label fw-bold titulo"}," P ",-1),k={class:"form-check form-check-inline"},y=["checked"],w=Object(c["e"])("label",{class:"form-check-label fw-bold titulo"}," M ",-1),x={class:"form-check form-check-inline"},R=["checked"],I=Object(c["e"])("label",{class:"form-check-label fw-bold titulo"}," G ",-1),P={class:"mb-3"},E=Object(c["e"])("label",{class:"form-label fw-bold mb-0 titulo"},"Link da imagem",-1),A=["value"],B={class:"mb-3 form-check form-switch"},C=["checked"],M=Object(c["e"])("label",{class:"form-check-label fw-bold titulo"},"Mais vendidos",-1),_={class:"col-xl-4"},S={class:"mb-3"},D=Object(c["e"])("label",{class:"form-label fw-bold mb-0 titulo"},"Descrição",-1),T=["value"],V=Object(c["e"])("div",{class:"col-xl-2"},null,-1),F={class:"row justify-content-evenly"},G={class:"col-xl-4"},L={class:"col-xl-4"},N=Object(c["e"])("div",{class:"col-xl-2"},null,-1);function U(e,t,o,b,p,f){var U=Object(c["m"])("Header");return Object(c["i"])(),Object(c["d"])("div",a,[Object(c["g"])(U,{page:"cadastro-edicao","tipo-pagina":"edicao",id:p.produto.id},null,8,["id"]),Object(c["e"])("div",n,[Object(c["e"])("div",r,[Object(c["e"])("div",i,[s,Object(c["e"])("input",{class:"form-control",id:"preco",type:"number",value:p.produto.preco},null,8,l)]),Object(c["e"])("div",u,[d,Object(c["e"])("select",{class:"form-select",id:"categoria",onChange:t[0]||(t[0]=function(){return f.alteraVisibilidadeCheckbox&&f.alteraVisibilidadeCheckbox.apply(f,arguments)})},m,32)]),Object(c["e"])("div",h,[v,Object(c["e"])("div",O,[Object(c["e"])("input",{class:"form-check-input",type:"checkbox",value:"P",id:"checkPequeno",checked:f.verificaTamanhos("P")},null,8,g),j]),Object(c["e"])("div",k,[Object(c["e"])("input",{class:"form-check-input",type:"checkbox",value:"M",id:"checkMedio",checked:f.verificaTamanhos("M")},null,8,y),w]),Object(c["e"])("div",x,[Object(c["e"])("input",{class:"form-check-input",type:"checkbox",value:"G",id:"checkGrande",checked:f.verificaTamanhos("G")},null,8,R),I])]),Object(c["e"])("div",P,[E,Object(c["e"])("input",{class:"form-control",id:"urlDaImagem",type:"url",value:p.produto.urlImagem},null,8,A)]),Object(c["e"])("div",B,[Object(c["e"])("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"maisVendidos",checked:f.isChecked()},null,8,C),M])]),Object(c["e"])("div",_,[Object(c["e"])("div",S,[D,Object(c["e"])("textarea",{id:"descricao",class:"form-control",value:p.produto.descricao,placeholder:"Descrição...",cols:"20",rows:"6",style:{resize:"none"}},null,8,T)])]),V]),Object(c["e"])("div",F,[Object(c["e"])("div",G,[Object(c["e"])("button",{onClick:t[1]||(t[1]=function(e){return f.submit(p.produto.id)}),type:"button",class:"btn submit form-control"}," CONFIRMAR ")]),Object(c["e"])("div",L,["Disponível"==p.produto.status?(Object(c["i"])(),Object(c["d"])("button",{key:0,onClick:t[2]||(t[2]=function(e){return f.mudarStatus(p.produto.id)}),type:"button",class:"btn submit form-control esgotado"}," MARCAR COMO ESGOTADO ")):(Object(c["i"])(),Object(c["d"])("button",{key:1,onClick:t[3]||(t[3]=function(e){return f.mudarStatus(p.produto.id)}),type:"button",class:"btn submit form-control disponivel"}," MARCAR COMO DISPONÍVEL "))]),N])])}var H=o("1da1"),q=(o("ac1f"),o("1276"),o("1e25"),o("96cf"),o("0418")),z=(o("852e"),o("bc3a"),o("181d")),J=o("6de1"),X={name:"App",components:{Header:q["a"]},data:function(){return{id:"",produto:{id:"",nome:""},produtoForm:{preco:"",categoria:"",tamanhos:"",urlDaImagem:"",maisVendidos:"",descricao:""}}},beforeMount:function(){z["a"].verificaToken();var e=z["a"].pegaDadosUrl();this.getProduto(e.id)},mounted:function(){this.selecionaOption()},methods:{pegaDados:function(){this.produtoForm.preco=document.getElementById("preco").value,this.produtoForm.categoria=document.getElementById("categoria").value,this.produtoForm.tamanhos=this.concatenaTamanhos(),this.produtoForm.urlDaImagem=document.getElementById("urlDaImagem").value,this.produtoForm.maisVendidos=this.formataMaisVendidos(),this.produtoForm.descricao=document.getElementById("descricao").value},getProduto:function(e){var t=this;return Object(H["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,J["a"].get("".concat(e)).then((function(e){t.produto=e.data})).catch((function(e){alert(e.response.data)}));case 2:case"end":return o.stop()}}),o)})))()},submit:function(e){var t=this;return Object(H["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return t.pegaDados(),o.next=3,J["a"].put("".concat(e),t.produtoForm).then((function(e){alert("Produto editado com sucesso!"),window.location.href="http://localhost:8080/catalogo-admin"})).catch((function(e){alert(e.response.data)}));case 3:case"end":return o.stop()}}),o)})))()},mudarStatus:function(e){return Object(H["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,J["a"].put("status/".concat(e)).then((function(e){alert("Status editado com sucesso!"),window.location.reload()})).catch((function(e){alert(e.response.data)}));case 2:case"end":return t.stop()}}),t)})))()},verificaTamanhos:function(e){if(""!==this.produto.tamanhos||void 0!==this.produto.tamanhos)for(var t=this.produto.tamanhos,o=t.split(" "),c=0;c<o.length;c++)if(e===o[c])return!0},concatenaTamanhos:function(){var e="",t=document.getElementById("checkPequeno"),o=document.getElementById("checkMedio"),c=document.getElementById("checkGrande");return t.checked&&(e+="P "),o.checked&&(e+="M "),c.checked&&(e+="G"),2===e.length||4===e.length?e.trimEnd():e},alteraVisibilidadeCheckbox:function(){var e=document.getElementById("categoria"),t=document.getElementById("tamanhosDiv");"roupas"!==e.value?(t.style.display="none",this.produtoForm.tamanhos=""):t.style.display="block"},formataMaisVendidos:function(){var e=document.getElementById("maisVendidos");return e.checked?"S":"N"},isChecked:function(){return"S"===this.produto.maisVendidos},selecionaOption:function(){switch(this.produto.categoria.nome){case"roupas":document.getElementById("optRoupas").setAttribute("selected","");break;case"prendedores":document.getElementById("optPrendedores").setAttribute("selected","");break;case"acessorios":document.getElementById("optAcessorios").setAttribute("selected","");break}}}},K=(o("9c69"),o("6b0d")),Q=o.n(K);const W=Q()(X,[["render",U]]);var Y=W;Object(c["b"])(Y).mount("#app")},"611a":function(e,t,o){},"6de1":function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var c=o("bc3a"),a=o.n(c),n=o("852e"),r=o.n(n),i=a.a.create({baseURL:"https://mimosbyliv-api.herokuapp.com/api/",headers:{Authorization:"Bearer ".concat(r.a.get("api_token"))}})},"9c69":function(e,t,o){"use strict";o("611a")},b34e:function(e,t,o){"use strict";o("e7d0")},c404:function(e,t,o){e.exports=o.p+"img/delete_white_24dp.e58a010c.svg"},e7d0:function(e,t,o){},eae2:function(e,t,o){e.exports=o.p+"img/arrow_back_white_24dp.475b45cd.svg"}});
//# sourceMappingURL=edicao-produto.2b029585.js.map