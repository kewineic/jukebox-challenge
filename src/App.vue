<template>
  <div class="container-primary">
    <header class="header-container">
      <h1> Desafio Jukebox </h1>
    </header>

    <main class="main-container">
      <form class="form-content" @submit.prevent="saveData()">

        <div class="input-container">
          <label for="name" class="form-label">Nome</label>
          <input v-model="personalData.name" type="text" id="name" class="form-input" required>
        </div>

        <div class="input-container">
          <label for="lastName" class="form-label">Sobrenome</label>
          <input v-model="personalData.lastName" type="text" id="lastName" class="form-input" required>
        </div>

        <div class="input-container">
          <label for="email" class="form-label">E-mail</label>
          <input v-model="personalData.email" type="text" id="email" class="form-input" required>
        </div>

        <div class="input-container">
          <label for="telephone" class="form-label">Telefone</label>
          <input v-model="personalData.telephone" type="text" id="telephone" class="form-input" required>
        </div>

        <div class="input-container checkbox-container">
          <input v-model="personalData.legalEntity" type="checkbox" id="legalEntity" class="form-checkbox">
          <label for="legalEntity" class="form-label-checkbox">Pessoa Jurídica </label>
        </div>

        <div class="input-container" v-if="legalEntityVisibility.cpf">
          <label for="cpf" class="form-label">CPF</label>
          <input v-model="personalData.identity" type="text" id="cpf" class="form-input" required>
        </div>

        <div class="input-container" v-if="legalEntityVisibility.cnpj">
          <label for="cnpj" class="form-label">CNPJ</label>
          <input v-model="personalData.identity" type="text" id="cnpj" class="form-input" required>
        </div>

        <div class="input-container">
          <Button
            buttonType="submit"
            buttonValue="Salvar"
          />
        </div>
      </form>
      <Table
        :tableValues="concatenatedData"
        @buttonEditActivated="editData"
        @buttonDeleteActivated="deleteData"
      />
    </main>

    <footer class="footer-container">
      Desafio Jukebox &copy; Kewin Costa
    </footer>

  </div>
</template>

<script>
import Table from './components/shared/table/Table';
import Button from './components/shared/button/Button';

export default {
  components: {
    'Table' : Table,
    'Button' : Button
  },

  data(){
    return {
      editingData : {
        index: 0,
        isEditing: false
      },

      personalData: {
        name: '',
        lastName: '',
        email: '',
        telephone: '',
        identity: '',
        legalEntity: false
      },

      legalEntityVisibility: {
        cpf: true,
        cnpj: false
      },

      savedPersonalData: []
    }
  },

  methods: {
    saveData(){
      if(this.editingData.isEditing){
        this.savedPersonalData.splice(this.editingData.index, 1, {...this.personalData});
        this.editingData.isEditing = false;
      } else {
        this.savedPersonalData.push({
          ...this.personalData
        });
      }

      this.personalData = {
        name: '',
        lastName: '',
        email: '',
        telephone: '',
        cpf: '',
        cnpj: '',
        legalEntity: ''
      }
    },

    editData(index){
      this.personalData = {...this.savedPersonalData[index] }
      this.editingData = {
        index,
        isEditing : true,
      };
    },

    deleteData(index){
      this.savedPersonalData.splice(index, 1)
    }
  },

  computed: {
    concatenatedData(){
      return this.savedPersonalData.map( data =>
        ({
          name: `${data.name} ${data.lastName}`,
          email: data.email,
          telephone: data.telephone,
          identity: data.identity
        })
      )
    }
  },

  watch: {
    'personalData.legalEntity' : function (value) {
      if(value === true) {
        this.legalEntityVisibility.cpf = false
        this.legalEntityVisibility.cnpj = true
      } else {
        this.legalEntityVisibility.cpf = true
        this.legalEntityVisibility.cnpj = false
      }
    }
  }
}
</script>

<style>
  @import './assets/css/global.css';
  @import './assets/css/global-media-queries.css'
</style>
