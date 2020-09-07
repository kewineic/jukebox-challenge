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
          <input v-model="personalData.cpf" type="text" id="cpf" class="form-input" required>
        </div>

        <div class="input-container" v-if="legalEntityVisibility.cnpj">
          <label for="cnpj" class="form-label">CNPJ</label>
          <input v-model="personalData.cnpj" type="text" id="cnpj" class="form-input" required>
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
      editingData : false,
      personalData: {
        name: '',
        lastName: '',
        email: '',
        telephone: '',
        cpf: '',
        cnpj: '',
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

      if(this.editingData){
        this.savedPersonalData.splice(0, 1, {...this.personalData});
        this.editingData = false;
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
      this.personalData = {
        name: this.savedPersonalData[index].name,
        lastName: this.savedPersonalData[index].lastName,
        email: this.savedPersonalData[index].email,
        telephone: this.savedPersonalData[index].telephone,
        cpf: this.savedPersonalData[index].cpf,
        cnpj: this.savedPersonalData[index].cnpj,
        legalEntity: this.savedPersonalData[index].legalEntity
      },
      this.editingData = true;
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
          cpf: data.cpf,
          cnpj: data.cnpj
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
