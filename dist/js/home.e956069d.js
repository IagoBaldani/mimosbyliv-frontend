(function(e){function t(t){for(var n,r,i=t[0],s=t[1],l=t[2],d=0,f=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==c[s]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},c={home:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("ef1c")},"0418":function(e,t,a){"use strict";var n=a("7a23"),c=a("43f2"),o=a.n(c),r=a("1754"),i=a.n(r),s=a("eae2"),l=a.n(s),u=a("09bd"),d=a.n(u),f=a("c404"),p=a.n(f),b=function(e){return Object(n["k"])("data-v-1b61aec9"),e=e(),Object(n["j"])(),e},g={class:"containercustom d-flex"},m=b((function(){return Object(n["e"])("div",{class:"logo"},[Object(n["e"])("img",{class:"logo",src:o.a})],-1)})),v={key:0,href:"/login"},j=b((function(){return Object(n["e"])("div",{class:"botao d-flex justify-content-evenly"},[Object(n["e"])("img",{class:"imgBotao",src:i.a}),Object(n["e"])("p",null,"GERENCIAR")],-1)})),O=[j],h={key:1,href:"/home"},y=b((function(){return Object(n["e"])("div",{class:"botao d-flex justify-content-evenly"},[Object(n["e"])("img",{class:"imgBotao",src:l.a}),Object(n["e"])("p",null,"VOLTAR")],-1)})),x=[y],w={key:2,class:"botoes d-flex"},_=Object(n["f"])('<a href="/cadastro-produto" data-v-1b61aec9><div class="botao d-flex justify-content-evenly" data-v-1b61aec9><img class="imgBotao" src="'+d.a+'" data-v-1b61aec9><p data-v-1b61aec9>ADICIONAR</p></div></a><a href="/login" data-v-1b61aec9><div class="botao d-flex justify-content-evenly" data-v-1b61aec9><img class="imgBotao" src="'+l.a+'" data-v-1b61aec9><p data-v-1b61aec9>SAIR</p></div></a>',2),R=[_],k={key:3,class:"botoes d-flex"},A=b((function(){return Object(n["e"])("img",{class:"imgBotao",src:p.a},null,-1)})),S=b((function(){return Object(n["e"])("p",null,"EXCLUIR",-1)})),P=[A,S],I=b((function(){return Object(n["e"])("a",{href:"/catalogo-admin"},[Object(n["e"])("div",{class:"botao d-flex justify-content-evenly"},[Object(n["e"])("img",{class:"imgBotao",src:l.a}),Object(n["e"])("p",null,"VOLTAR")])],-1)}));function B(e,t,a,c,o,r){return Object(n["i"])(),Object(n["d"])("div",g,[m,"home"===a.page?(Object(n["i"])(),Object(n["d"])("a",v,O)):Object(n["c"])("",!0),"login"===a.page?(Object(n["i"])(),Object(n["d"])("a",h,x)):Object(n["c"])("",!0),"catalogo-admin"===a.page?(Object(n["i"])(),Object(n["d"])("div",w,R)):Object(n["c"])("",!0),"cadastro-edicao"===a.page?(Object(n["i"])(),Object(n["d"])("div",k,["edicao"===a.tipoPagina?(Object(n["i"])(),Object(n["d"])("div",{key:0,class:"botao excluir d-flex justify-content-evenly",onClick:t[0]||(t[0]=function(e){return r.excluir(a.id)})},P)):Object(n["c"])("",!0),I])):Object(n["c"])("",!0)])}var C=a("1da1"),L=(a("96cf"),a("a9e3"),a("6de1")),T={name:"Header",props:{page:String,tipoPagina:String,id:Number},data:function(){return{}},methods:{excluir:function(e){return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,L["a"].delete("".concat(e)).then((function(e){alert("Produto excluído com sucesso!"),window.location.href="http://localhost:8080/catalogo-admin"})).catch((function(e){alert("Erro na exclusão: "+e.response.data)}));case 2:case"end":return t.stop()}}),t)})))()}}},E=(a("b34e"),a("6b0d")),M=a.n(E);const G=M()(T,[["render",B],["__scopeId","data-v-1b61aec9"]]);t["a"]=G},"07ae":function(e,t,a){e.exports=a.p+"img/local_grocery_store_white_24dp.a19b4f2d.svg"},"09bd":function(e,t,a){e.exports=a.p+"img/add_white_24dp.73fa973c.svg"},"0f16":function(e,t,a){e.exports=a.p+"img/icons8-instagram.e2f2c772.svg"},"10f2":function(e,t,a){"use strict";a("1e12")},1754:function(e,t,a){e.exports=a.p+"img/settings_white_24dp.b3998d4f.svg"},"1e12":function(e,t,a){},"43f2":function(e,t,a){e.exports=a.p+"img/logo.0d5bec85.jpeg"},"6de1":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("bc3a"),c=a.n(n),o=a("852e"),r=a.n(o),i=c.a.create({baseURL:"https://mimosbyliv-api.herokuapp.com/api/",headers:{Authorization:"Bearer ".concat(r.a.get("api_token"))}})},"9c91":function(e,t,a){e.exports=a.p+"img/icons8-whatsapp.ee8653b8.svg"},b34e:function(e,t,a){"use strict";a("e7d0")},c404:function(e,t,a){e.exports=a.p+"img/delete_white_24dp.e58a010c.svg"},e7d0:function(e,t,a){},eae2:function(e,t,a){e.exports=a.p+"img/arrow_back_white_24dp.475b45cd.svg"},ef1c:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),c=a("07ae"),o=a.n(c),r=a("9c91"),i=a.n(r),s=a("0f16"),l=a.n(s),u={class:"container-fluid"},d=Object(n["f"])('<div class="painel d-flex justify-content-evenly align-items-center mt-3"><a href="/catalogo" class="catalogo"><img class="logoCatalogo" src="'+o.a+'"><h1 class="mt-3 txtCatalogo"> IR PARA O CATÁLOGO </h1></a><div class="redesSociais"><a href="https://wa.me/message/IGVADUPR7KI3J1" target="_blank" class="botaoRedesSociais"><img class="logoRedesSociais me-2" src="'+i.a+'"><h2 class="mt-2">WhatsApp</h2></a><a href="https://www.instagram.com/mimosbyliv/" target="_blank" class="botaoRedesSociais"><img class="logoRedesSociais me-2" src="'+l.a+'"><h2 class="mt-2">Instagram</h2></a></div></div>',1);function f(e,t,a,c,o,r){var i=Object(n["m"])("Header");return Object(n["i"])(),Object(n["d"])("div",u,[Object(n["g"])(i,{page:"home"}),d])}var p=a("0418"),b={name:"App",components:{Header:p["a"]}},g=(a("10f2"),a("6b0d")),m=a.n(g);const v=m()(b,[["render",f]]);var j=v;Object(n["b"])(j).mount("#app")}});
//# sourceMappingURL=home.e956069d.js.map