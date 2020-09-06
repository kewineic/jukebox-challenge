<template>
  <div id="contaainer">
    <header>
      <h1> Desafio Jukebox </h1>
    </header>
    <main>
      <form>
        <label for="">Nome</label>
        <input type="text" name="" id="">

        <label for="">Sobrenome</label>
        <input type="text" name="" id="">

        <label for="">E-mail</label>
        <input type="text" name="" id="">

        <label for="">Telefone</label>
        <input type="text" name="" id="">

        <label for="">Pessoa Jurídica ?</label>
        <input type="checkbox">

        <label for="">CPF/CNPJ</label>
        <input type="text">
      </form>
      <Table :tableValues="concatenatedData"/>
    </main>
    <footer>
      Desafio Jukebox by Kewin Costa
    </footer>
  </div>
</template>

<script>
import Table from './components/shared/table/Table';

export default {
  components: {
    'Table' : Table
  },

  data(){
    return {
      personalData: [
        {
          name: 'Joao',
          lastName: 'Vilar',
          email: 'joao@hotmail.com',
          telephone: '(21)99878-8878',
          cpf_cnpj: '00000000000',
          legalEntity: false
        },
        {
          name: 'Vitor',
          lastName: 'Costa',
          email: 'vitinho@hotmail.com',
          telephone: '(21)99777-8878',
          cpf_cnpj: '001000103322',
          legalEntity: false
        }
      ]
    }
  },

  computed: {
    concatenatedData(){
      return this.personalData.map( data =>
        ({
          name: `${data.name} ${data.lastName}`,
          email: data.email,
          telephone: data.telephone,
          cpf_cnpj: data.cpf_cnpj,
        })
      )
    }
  },
}
</script>

<style>

</style>
