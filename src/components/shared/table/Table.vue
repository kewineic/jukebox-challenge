<template>
<table>
  <thead>
    <tr>
      <th>Nome</th>
      <th>Email</th>
      <th>Telefone</th>
      <th>CPF/CNPJ</th>
    </tr>
  </thead>
  <tbody>
    <tr v-bind:key="data.cpf_cnpj" v-for="data of tableValues">
      <td> {{data.name}} </td>
      <td> {{data.email}} </td>
      <td> {{data.telephone}} </td>
      <td> {{data.cpf_cnpj}} </td>
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
  },

  methods: {

  }
}
</script>

<style scoped>

</style>
