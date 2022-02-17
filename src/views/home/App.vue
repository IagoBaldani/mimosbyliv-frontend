<template>
  <div class="container-fluid">
    <Header page="home"/>
    <div class="painel d-flex justify-content-evenly align-items-center mt-3">
      <a href="/catalogo" class="catalogo">
         <img class="logoCatalogo" src="../../assets/local_grocery_store_white_24dp.svg">
         <h1 class="mt-3 txtCatalogo"> IR PARA O CATÁLOGO </h1>
      </a>
      <div class="redesSociais">
        <a href="https://wa.me/message/IGVADUPR7KI3J1" class="botaoRedesSociais">
          <img class="logoRedesSociais me-2" src="../../assets/icons8-whatsapp.svg">
          <h2 class="mt-2">WhatsApp</h2>
        </a>
        <a href="https://www.instagram.com/mimosbyliv/" class="botaoRedesSociais">
          <img class="logoRedesSociais me-2" src="../../assets/icons8-instagram.svg">
          <h2 class="mt-2">Instagram</h2></a>
      </div>
    </div>
  </div>

</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {
    Header
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

.catalogo, .redesSociais{
  height: 100%;
  width: 40vw;
  display: flex;
  flex-direction: column;
  color: #D4C1A5 !important;
}
.catalogo{
  background-color: #fff;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 5px #838483;
  transition: all linear 0.3s;
  text-align: center;
}

.catalogo:hover{
  color: #D4C1A5;
  box-shadow: 0px 0px 15px #fff;
}

.logoCatalogo{
  height: 30vh;
}

.txtCatalogo{
  font-size: 2em;
}

.redesSociais{
  justify-content: space-evenly;
}

.botaoRedesSociais{
  border-radius: 20px;
  box-shadow: 0px 0px 5px #838483;
  transition: all linear 0.3s;
  background-color: #fff;
  height: 40%;
  color: #D4C1A5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.botaoRedesSociais:hover{
  color: #D4C1A5;
  box-shadow: 0px 0px 15px #fff;
}

.logoRedesSociais{
  height: 10vh;
}

@media (max-width: 1200px) {
  .painel{
    flex-direction: column;
  }

  .catalogo, .redesSociais{
    width: 90vw;
    border-radius: 10px;
    padding: 10px;
  }

  .txtCatalogo{
    font-size: 1.5em;
  }

  .logoCatalogo{
    height: 100px;
  }

  .botaoRedesSociais{
    border-radius: 10px;
  }

  .logoRedesSociais{
    height: 40px;
  }



}


</style>
