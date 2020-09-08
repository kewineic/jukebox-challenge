<template>
<table class="table-container">
  <thead>
    <tr>
      <th>Nome</th>
      <th>Email</th>
      <th>Telefone</th>
      <th>CPF/CNPJ</th>
    </tr>
  </thead>
  <tbody>
    <tr v-bind:key="index" v-for="(value, index) of tableValues">
      <td> {{value.name}} </td>
      <td> {{value.email}} </td>
      <td> {{value.telephone}} </td>
      <td> {{value.identity}} </td>

      <div class="td-handle-content">
        <button
          @click="triggerEditAction(index)"
        ><img src='../../../assets/icons/edit-icon.svg'></button>
        <button
          @click="triggerDeleteAction(index)"
        ><img src='../../../assets/icons/delete-icon.svg'></button>
      </div>
    </tr>
  </tbody>
</table>
</template>

<script>

import Button from '../button/Button';

export default {
  props: {
    tableValues: {
      type: Array,
      required: true
    }
  },

  components: {
    'Button' : Button
  },

  methods: {
    triggerEditAction(index){
      this.$emit('buttonEditActivated', index);
    },

    triggerDeleteAction(index){
      this.$emit('buttonDeleteActivated', index);
    },
  }
}

</script>

<style scoped>

  .table-container {
    border-collapse: collapse;

    table-layout: fixed;
    width: 100%;
    max-width: 1000px;

    margin-bottom: 70px;
    margin-left: 10%;
  }

  .table-container th, .table-container td {
    border: 1px solid black;
    padding: 5px;
    overflow: auto;

    min-height: 3rem;

    white-space:pre-line;
  }

  .table-container th {
    background: rgba(0,0,0,.8);

    color: var(--white-default);
  }

  .td-handle-content {
    display: flex;
    flex-direction: row;
    align-content: space-between;

    margin: auto;
    margin-left: 5px;

  }

  .td-handle-content button{
    background: transparent;
    border: none;
    outline: none;
    opacity: 30%;

    transition: .3s;
  }

  .td-handle-content button:hover {
    cursor: pointer;
    opacity: 70%;
  }

  .td-handle-content button:active {
    opacity: 100%;
    box-shadow: 0 2px 0 rgba(0,0,0,.5);
  }

   .td-handle-content img{
     width: 1.5rem;
     margin-left: 10px;
   }

  @media (max-width: 600px) {
    .table-container {
      width: 80%;
      margin-left: 10%;
    }


  }

</style>
