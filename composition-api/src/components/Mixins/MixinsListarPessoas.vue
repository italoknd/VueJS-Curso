<script>
export default {
  name:"MixinsListarPessoas",
  mounted() {
    this.listarPessoas()
  },
  methods: {
    listarPessoas() {
      //logica para listar pessoas
      console.log('listou as pessoas!');
    }
  }
}
</script>