<template>
  <div>
    <form action="" id="form">
      <h1>Formulário:</h1>
      <fieldset>
        <label for="nome">Nome: </label>
        <input type="text" name="nome" v-model="nome" placeholder="Informe seu nome:" required>
        <br>
        
        <label for="">Telefone: </label>
        <input type="tel" maxlength="11" v-model="telefone" placeholder="Informe seu telefone" required>
        <br><br>
      </fieldset>

      <label for="">Deseja receber nossas novidades?</label>
      <br>
      <label for="">Sim: <input type="radio" v-model="novidades" value="Sim"></label>
      <br>
      <label for="">Não: <input type="radio" v-model="novidades" value="Não" checked></label>
      <br><br>
      <label for="">Nos informe seus interesses:</label>
      <br>
      <label for="">Futebol:<input type="checkbox" v-model="interesses" optional></label><br>
      <label for="">Formula 1:<input type="checkbox" v-model="interesses" optional></label><br>
      <label for="">Volei:<input type="checkbox" v-model="interesses" optional></label>
      <br><br>
      <label for="">Como nos conheceu?</label>
      <br>
      <select name="" id="" v-model="conheceu">
        <option value="" selected disabled>Escolha</option>
        <option value="Internet">Internet</option>
        <option value="TV">TV</option>
        <option value="Revista">Revista</option>
      </select>
      <br><br>
      <button v-on:click="enviar" id="button">Enviar</button>
      <div id="erro"><!-- msg de erro -->

      </div>
    </form>

    <div id="dados_do_form" v-show="envio==2">
      <p>Nome: {{ nome }}</p>
      <p>Telefone: {{ telefone }}</p>
      <p>Nos conheceu pela: {{ conheceu }}</p>
      <p>Desejou receber novidades? {{ novidades }}</p>
      <p>Seus interesses:</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",

  data() {
    return {
     nome: "",
     telefone: "",
     novidades: "",
     interesses: "Não informado",
     conheceu: "",
     envio: 0,
    }
  },
  methods: {
    enviar(e){
      e.preventDefault();

      if(this.nome == "" || this.telefone == ""){
        this.envio = 1;
        let errorElement = document.createElement('h3');
        let errorMsg = document.createTextNode('Erro. Campo de nome e/ou telefone vazio(s).');
        errorElement.appendChild(errorMsg);

        let divErro = document.querySelector('#erro');
        divErro.appendChild(errorElement);

        setTimeout(()=>{
          divErro.textContent = ""
        },3000)
      }else{
        this.envio = 2;
      }
    }
  },
}
</script>

<style scoped>
  div{
    background: #2CA6A4;
    color: white;
    padding: 20px;
    font-size: 1.1em;
  }

  form{
    max-width: 800px;
    margin: auto auto 20px auto;
    padding: 15px 0;
    border: 1px solid white;
    border-radius: 4px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.24);
  }

  fieldset{
    border: none;
  }

  h1{
    margin-bottom: 20px;
  }

  input[type="text"], input[type="tel"]{
    display: block;
    font-size: .9em;
    outline: none;
    color: #247c7b;
    margin: auto;
    padding: 2px 4px;
  }

   input[type="text"]::placeholder{
     color: #247c7b;
   }

  input[type="checkbox"]{
    display: block;
  }

  label > input[type="checkbox"]{
    display: inline;
    margin-left: 10px;
  }

  select{
    padding: 0px 20px;
    outline: none;
  }

  button{
    padding: 4px 15px;
    background: #247c7b;
    color: white;
    outline: none;
    border: 1px solid white;
    transition: .5s
  }

  button:hover{
    color: white;
    background: #1a5a59;
  }

  #dados_do_form{
    padding: 20px 0;
    margin-top: 20px;
    border: 1px solid ;
    text-indent: 10px;
    text-align: left;
    line-height: 40px;
    max-width: 800px;
    margin: auto;
    border-radius: 4px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.24);
  }
</style>