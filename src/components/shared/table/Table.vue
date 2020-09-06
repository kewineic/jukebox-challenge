<template>
<table class="table-container">
  <thead>
    <tr>
      <th>Nome</th>
      <th>Email</th>
      <th>Telefone</th>
      <th>CPF</th>
      <th>CNPJ</th>
    </tr>
  </thead>
  <tbody>
    <tr v-bind:key="data.cpf_cnpj" v-for="data of tableValues">
      <td> {{data.name}} </td>
      <td> {{data.email}} </td>
      <td> {{data.telephone}} </td>
      <td> {{data.cpf}} </td>
      <td> {{data.cnpj}} </td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  props: {
    keys: {
      type: Array,
      required: true
    },
    tableValues: {
      type: Array,
      required: true
    }
  },

  methods: {

  }
}
</script>

<style scoped>

  .table-container {
    border-collapse: collapse;
  }

  .table-container th, .table-container td {
    border: 1px solid black;
    padding: 5px;
  }

  .table-container th {
    background: rgba(0,0,0,.8);

    color: var(--white-default);
  }

</style>
