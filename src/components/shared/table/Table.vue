<template>
    <v-simple-table light >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">E-mail</th>
            <th class="text-left">Telefone</th>
            <th class="text-left">CPF/CNPJ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-bind:key="index" v-for="(value, index) of tableValues">
            <td> {{value.name}} </td>
            <td> {{value.email}} </td>
            <td> {{value.telephone}} </td>
            <td> {{value.identity}} </td>
            
            <v-container class="td-handle-content">
              <button
                @click="triggerEditAction(index)"
              >
                <v-icon>fas fa-edit</v-icon>
              </button>

              <button
                @click="triggerDeleteAction(index)"
              > 
                <v-icon>fas fa-trash</v-icon>
              </button>
              </v-container>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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
  .v-data-table {

    max-width: 940px;
    margin: 3rem auto 5rem auto;
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

  .v-icon {
    width: 1.5rem;
    margin-left: .8rem;
  }

</style>
