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
                <v-icon size="20">fas fa-edit</v-icon>
              </button>

              <button
                @click="triggerDeleteAction(index)"
              > 
                <v-icon size="20">fas fa-trash</v-icon>
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

<style lang="scss" scoped>
  .v-data-table {

    max-width: 940px;
    margin: 3rem auto 5rem auto;
  }

  .td-handle-content button{
    background: transparent;
    border: none;
    outline: none;

    transition: .3s;
  }

  .td-handle-content button:hover {
    opacity: 50%;
  }

  .v-icon {
    padding: .5rem;
   
  }

</style>
