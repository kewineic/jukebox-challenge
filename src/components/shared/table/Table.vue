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
    <tr v-bind:key="value.email" v-for="value of tableValues">
      <td> {{value.name}} </td>
      <td> {{value.email}} </td>
      <td> {{value.telephone}} </td>
      <td> {{value.cpf}} </td>
      <td> {{value.cnpj}} </td>
    </tr>
  </tbody>
</table>
</template>

<script>

export default {
  props: {
    tableValues: {
      type: Array,
      required: true
    }
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
